import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useAuthRedirect from '../../../core/middleware/authService';
import { SidebarAdmin } from '../../layout/admins/componets/sidebarAdmin/SidebarAdmin';
import { MenuAdmin } from '../../layout/admins/componets/menuAdmin/MenuAdmin';
import useEditorMiddleware from '../../../core/helpers/editorHandle';
import { FiBold, FiItalic, FiUnderline, FiAlignLeft, FiAlignCenter, FiAlignRight, FiLink, FiImage, FiList, FiAlignJustify } from 'react-icons/fi';
import { getProjectById, createProject, updateProject } from '../../../core/helpers/projectRoutes';
import supabase from '../../../supabase/Client';
import './projects.css'

const Projects = () => {
    const { id } = useParams();
    useAuthRedirect(`/projects-editor`);

    const [content, setContent] = useState('');
    const [uploading, setUploading] = useState(false);
    const [imageFile, setImageFile] = useState(null);

    useEffect(() => {
        const fetchProject = async () => {
            if (id) {
                try {
                    const projectData = await getProjectById(id);
                    if (projectData) {
                        setContent(projectData.content);
                    }
                } catch (error) {
                    console.error('Error al cargar el proyecto:', error.message);
                }
            }
        };

        fetchProject();
    }, [id]);

    useEffect(() => {
        console.log('Contenido:', content);
    }, [content]);

    const handleSave = async () => {
        const editorContent = editorContentRef.current.innerHTML;

    setContent(editorContent);

        try {
            if (id) {
                await updateProject(id, { content: editorContent });
                console.log('Proyecto actualizado correctamente');
            } else {
                await createProject({ content: editorContent });
                console.log('Proyecto creado correctamente');
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

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (!file) return;
        setImageFile(file);
    };

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
    } = useEditorMiddleware(); // Este Hook debe ser llamado siempre en el mismo lugar y sin condiciones.

    const encodeImageToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                const base64String = reader.result.split(',')[1];
                resolve(base64String);
            };
            reader.onerror = (error) => reject(error);
            reader.readAsDataURL(file);
        });
    };

    const uploadImage = async () => {
        if (!imageFile) {
            alert('Por favor, seleccione una imagen');
            return;
        }

        setUploading(true);

        try {
            const base64Image = await encodeImageToBase64(imageFile);
            const { error } = await supabase.from('projects').insert([{ img_cover: base64Image, content }]);
            if (error) {
                throw error;
            }
            console.log("Image uploaded:", imageFile.name);
            console.log("Image URL:", base64Image);
            alert('Imagen guardada correctamente');
            setImageFile(null);
        } catch (error) {
            console.error('Error uploading image:', error.message);
            console.log("Error details:", error);
            alert("Error al subir la imagen");
        } finally {
            setUploading(false);
        }
    };

    const save = () => {
        handleSave()
        uploadImage()
    }

    return (
        <div className='editor'>
            <SidebarAdmin />
            <main>
                <MenuAdmin />
                <div className="container">
                    <div className="inputImg">
                    <input type="file" accept=".jpg,.jpeg,.png" onChange={handleImageChange} disabled={uploading} />
                    </div>
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
                            <button className="btnSave" onClick={save}>Guardar</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Projects;
