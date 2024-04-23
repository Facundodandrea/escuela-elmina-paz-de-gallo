import React, { useState, useEffect } from 'react';
import Layout from '../../layout/admins/AdminLayout';
import supabase from '../../../supabase/Client';
import useAuthRedirect from '../../../core/middleware/authService';
import './carrousel-editor.css';

const CarrouselEditor = () => {
    useAuthRedirect('/carrousel-editor');

    const [slides, setSlides] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [imageFile, setImageFile] = useState(null);
    const [link, setLink] = useState('');
    const [editingLinkId, setEditingLinkId] = useState(null);

    useEffect(() => {
        const fetchSlides = async () => {
            try {
                const { data, error } = await supabase.from('carrousel').select('*');
                if (error) {
                    throw error;
                }
                console.log("Slides obtenidos:", data);
                setSlides(data);
            } catch (error) {
                console.error('Error fetching slides:', error.message);
            }
        };

        fetchSlides();
    }, []);

    const decodeBase64Image = (base64String) => {
        const binaryString = atob(base64String);
        const byteArray = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
            byteArray[i] = binaryString.charCodeAt(i);
        }
        return new Blob([byteArray], { type: 'image/png' });
    };

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
            const { error } = await supabase.from('carrousel').insert([{ img_URL: base64Image, link }]);
            if (error) {
                throw error;
            }
            console.log("Image uploaded:", imageFile.name);
            console.log("Image URL:", base64Image);
            alert('Imagen guardada correctamente');
            setImageFile(null);
            setLink('');
            setSlides([...slides, { img_URL: base64Image, link }]);
        } catch (error) {
            console.error('Error uploading image:', error.message);
            console.log("Error details:", error);
            alert("Error al subir la imagen");
        } finally {
            setUploading(false);
        }
    };

    const deleteImage = async (id) => {
        try {
            const { error } = await supabase.from('carrousel').delete().eq('id', id);
            if (error) {
                throw error;
            }
            setSlides(prevSlides => prevSlides.filter(slide => slide.id !== id));
            console.log("Image deleted with ID:", id);
        } catch (error) {
            console.error('Error deleting image:', error.message);
            alert("Error al eliminar la imagen");
        }
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (!file) return;
        setImageFile(file);
    };

    const handleCancel = () => {
        setImageFile(null);
        setLink('');
        setEditingLinkId(null);
    };

    const handleEditLink = (link, id) => {
        setLink(link);
        setEditingLinkId(id);
    };

    const saveLink = async () => {
        try {
            const { error } = await supabase.from('carrousel').update({ link }).eq('id', editingLinkId);
            if (error) {
                throw error;
            }
            console.log("Link updated for ID:", editingLinkId);
            setEditingLinkId(null);
            alert('Enlace actualizado correctamente');
        } catch (error) {
            console.error('Error updating link:', error.message);
            alert("Error al actualizar el enlace");
        }
    };

    return (
        <Layout>
            <div className="carrousel-editor">
                <div className="controls">
                    <input type="file" accept=".jpg,.jpeg,.png" onChange={handleImageChange} disabled={uploading} />
                    <input type="text" value={link} onChange={(e) => setLink(e.target.value)} placeholder="Enlace" disabled={editingLinkId !== null} />
                    {editingLinkId !== null ? (
                        <button onClick={saveLink}>Guardar Enlace</button>
                    ) : (
                        <button onClick={uploadImage} disabled={uploading}>Guardar</button>
                    )}
                    <button onClick={handleCancel}>Cancelar</button>
                    {uploading && <p>Subiendo imagen...</p>}
                </div>
                <div className="carrouselContent">
                    <table>
                        <thead>
                            <tr>
                                <th>Imagen</th>
                                <th>Enlace</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {slides.map((slide, index) => (
                                <tr key={index}>
                                    <td><img style={{ maxWidth: '120px' }} src={URL.createObjectURL(decodeBase64Image(slide.img_URL))} alt={`Slide ${index + 1}`} /></td>
                                    <td>{editingLinkId === slide.id ? <input type="text" value={link} onChange={(e) => setLink(e.target.value)} /> : slide.link}</td>
                                    <td className='btns'>
                                        {editingLinkId === slide.id ? (
                                            <button onClick={saveLink}>Guardar</button>
                                        ) : (
                                            <button onClick={() => handleEditLink(slide.link, slide.id)}>Editar</button>
                                        )}
                                        <button onClick={() => deleteImage(slide.id)}>Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
};

export default CarrouselEditor;
