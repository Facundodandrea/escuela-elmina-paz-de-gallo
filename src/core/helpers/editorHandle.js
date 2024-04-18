import { useState, useRef } from 'react';

const useEditorMiddleware = () => {
    const [editorStyles, setEditorStyles] = useState({
        bold: false,
        italic: false,
        underline: false,
        align: 'left' // Por defecto, alineado a la izquierda
    });

    const editorContentRef = useRef(null);
    const inputRef = useRef(null); // Referencia para el input de imagen

    const handleStyleChange = (style) => {
        document.execCommand(style);
        setEditorStyles({ ...editorStyles, [style]: !editorStyles[style] });
    }

    const handleAlignButtonClick = (alignment) => {
        document.execCommand('justify' + alignment);
        setEditorStyles({ ...editorStyles, align: alignment });
    }

    const handleFormatChange = (event) => {
        document.execCommand('formatBlock', false, event.target.value);
    }

    const handleInsertLink = () => {
        const url = prompt('Inserta el enlace:');
        if (url) {
            document.execCommand('createLink', false, url);
        }
    }

    const handleImageUpload = () => {
        inputRef.current.click(); // Al hacer clic en el botón de imagen, activa el input
    }

    const handleImageInputChange = (event) => {
        const file = event.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.maxWidth = '100%';
            editorContentRef.current.focus();
            document.execCommand('insertHTML', false, img.outerHTML);
        };
        reader.readAsDataURL(file);
    }

    const handleInsertOrderedList = () => {
        document.execCommand('insertOrderedList');
    }

    const handleInsertListItem = () => {
        document.execCommand('insertUnorderedList');
    }

    return {
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
    };
}

export default useEditorMiddleware;
