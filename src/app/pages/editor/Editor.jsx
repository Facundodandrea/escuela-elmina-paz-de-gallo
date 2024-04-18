import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useAuthRedirect from '../../../core/middleware/authService'
import { SidebarAdmin } from "../../layout/admins/componets/sidebarAdmin/SidebarAdmin";
import { MenuAdmin } from '../../layout/admins/componets/menuAdmin/MenuAdmin';
import useEditorMiddleware from '../../../core/helpers/editorHandle';
import { FiBold, FiItalic, FiUnderline, FiAlignLeft, FiAlignCenter, FiAlignRight, FiLink, FiImage, FiList, FiAlignJustify } from 'react-icons/fi';
import { getArticleById, createArticle, updateArticle } from '../../../core/helpers/articleRoutes';
import './editor.css';

const Editor = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { id } = useParams();
    useAuthRedirect(`/editor`);

    useEffect(() => {
        const fetchArticle = async () => {
            if (id) {
                try {
                    const articleData = await getArticleById(id);
                    if (articleData) {
                        setTitle(articleData.title);
                        setContent(articleData.content);
                    }
                } catch (error) {
                    console.error('Error al cargar el artículo:', error.message);
                }
            }
        };

        fetchArticle();
    }, [id]);

    useEffect(() => {
        console.log('Título:', title);
        console.log('Contenido:', content);
    }, [title, content]);

    const {
        editorStyles,
        editorContentRef,
        inputRef,
        handleStyleChange,
        handleAlignButtonClick,
        handleFormatChange,
        handleInsertLink,
        handleImageUpload,
        handleImageInputChange,
        handleInsertOrderedList,
        handleInsertListItem
    } = useEditorMiddleware();

    const handleSave = async () => {
        const editorContent = editorContentRef.current.innerHTML;
        const h1Element = editorContentRef.current.querySelector('h1');
        const enteredTitle = h1Element ? h1Element.textContent : 'Sin título';

        setTitle(enteredTitle);
        setContent(editorContent);

        try {
            if (id) {
                // Si hay una ID presente, actualizamos el artículo existente
                await updateArticle(id, { title: enteredTitle, content: editorContent });
                console.log('Artículo actualizado correctamente');
            } else {
                // De lo contrario, creamos un nuevo artículo
                await createArticle({ title: enteredTitle, content: editorContent });
                console.log('Artículo creado correctamente');
            }
        } catch (error) {
            console.error('Error al guardar los datos:', error.message);
        }
    };

    const handleCancel = () => {
        const confirmCancel = window.confirm('¿Estás seguro de que deseas cancelar?. Esto eliminará todo el contenido no guardado.');
        if (confirmCancel) {
            editorContentRef.current.innerHTML = '';
        }
    };

    return (
        <div className='editor'>
            <SidebarAdmin />
            <main>
                <MenuAdmin />
                <div className="container">
                    <div className="editorWrapper">
                        <div className="toolbar">
                            <button type='button' className={`btn ${editorStyles.bold ? 'active' : ''}`} onClick={() => handleStyleChange('bold')}><FiBold /></button>
                            <button type='button' className={`btn ${editorStyles.italic ? 'active' : ''}`} onClick={() => handleStyleChange('italic')}><FiItalic /></button>
                            <button type='button' className={`btn ${editorStyles.underline ? 'active' : ''}`} onClick={() => handleStyleChange('underline')}><FiUnderline /></button>
                            <button type='button' className={`btn ${editorStyles.align === 'left' ? 'active' : ''}`} onClick={() => handleAlignButtonClick('Left')}><FiAlignLeft /></button>
                            <button type='button' className={`btn ${editorStyles.align === 'center' ? 'active' : ''}`} onClick={() => handleAlignButtonClick('Center')}><FiAlignCenter /></button>
                            <button type='button' className={`btn ${editorStyles.align === 'right' ? 'active' : ''}`} onClick={() => handleAlignButtonClick('Right')}><FiAlignRight /></button>
                            <select className="format-select" onChange={handleFormatChange}>
                                <option value="p">Párrafo</option>
                                <option value="h1">Título 1</option>
                                <option value="h2">Subtítulo</option>
                                <option value="blockquote">Cita</option>
                                <option value="pre">Código</option>
                            </select>
                            <button type='button' className="btn" onClick={handleInsertOrderedList}><FiList /></button>
                            <button type='button' className="btn" onClick={handleInsertListItem}><FiAlignJustify /></button>
                            <button type='button' className={`btn`} onClick={handleInsertLink}><FiLink /></button>
                            <button type='button' className={`btn`} onClick={handleImageUpload}><FiImage /></button>
                            <input ref={inputRef} className="image-input" type="file" accept="image/*" onChange={handleImageInputChange} style={{ display: 'none' }} />
                        </div>
                        <div className="editorContent" ref={editorContentRef} contentEditable='true' dangerouslySetInnerHTML={{ __html: content }}></div>
                        <div className="editorActions">
                            <button className="btnCancel" onClick={handleCancel}>Cancelar</button>
                            <button className="btnSave" onClick={handleSave}>Guardar</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Editor;
