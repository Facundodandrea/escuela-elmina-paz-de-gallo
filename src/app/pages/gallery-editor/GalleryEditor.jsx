import React, { useState, useEffect } from 'react';
import Layout from '../../layout/admins/AdminLayout';
import supabase from '../../../supabase/Client';
import './gallery-editor.css'

const GalleryEditor = () => {
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);

  const BUCKET_IMAGES = process.env.REACT_APP_BUCKET_IMAGES
  
  const getImages = async () => {
    try {
      const { data, error } = await supabase
        .storage
        .from('images')
        .list();
  
      if (error) {
        throw error;
      }
  
      setImages(data || []);
      console.log("Imagen obtenida:", data.name);
      console.log("Imagen obtenida URL:", data);
    } catch (error) {
      console.error('Error loading images:', error.message);
      alert("Error al cargar las imágenes");
    }
  };
  
  
  const uploadImage = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    
    setUploading(true);
  
    try {
      const { data, error } = await supabase.storage.from('images').upload(file.name, file);
      
      if (error) {
        throw error;
      }
      
      // Add the uploaded image to the images state
      setImages(prevImages => [...prevImages, data]);
  
      console.log("Image uploaded:", file.name);
      console.log("Image URL:", data);
    } catch (error) {
      console.error('Error uploading image:', error.message);
      console.log("Error details:", error);
      alert("Error al subir la imagen");
    } finally {
      setUploading(false);
    }
  };
  
  
  const deleteImage = async (image) => {
    try {
      const { error } = await supabase.storage.from('images').remove([image.name]);
      
      if (error) {
        throw error;
      }
      
      // Remove the deleted image from the images state
      setImages(prevImages => prevImages.filter(img => img.name !== image.name));

      console.log("Image deleted:", image.name);
    } catch (error) {
      console.error('Error deleting image:', error.message);
      alert("Error al eliminar la imagen");
    }
  };
  
    useEffect(() => {
      getImages();
    }, [images]);
  
  return (
    <Layout>
      <div className="gallery-editor">
        <input type="file" accept=".jpg,.jpeg,.png" onChange={uploadImage} disabled={uploading} />
        {uploading && <p>Subiendo imagen...</p>}
        <div className="galleryContent">
          {images.map((image, index) => (
            <div key={index} className="imageContainer">
              <img className="imgHolder" src={BUCKET_IMAGES + image.name} alt={image.name} />
              <button onClick={() => deleteImage(image)}>Eliminar</button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default GalleryEditor;
