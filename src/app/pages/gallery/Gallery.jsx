import React, { useState, useEffect } from 'react';
import Layout from '../../layout/common/Layout';
import supabase from '../../../supabase/Client';

import './gallery.css';

const Gallery = () => {
  const [images, setImages] = useState([]);
  
  const fetchImages = async () => {
    try {
      const { data, error } = await supabase
        .storage
        .from('images')
        .list();
  
      if (error) {
        throw error;
      }
  
      setImages(data || []);
    } catch (error) {
      console.error('Error fetching images:', error.message);
      alert("Error al cargar las imágenes");
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);
  
  return (
    <Layout>
      <div className="gallery">
        <h2 className="galleryTitle">
          Galería
        </h2>
        <div className="galleryContent">
          {images.map((image, index) => (
            <div key={index} className="imgHolder">
              <img src={`https://mmtixvyvrhofccnmfjfw.supabase.co/storage/v1/object/public/images/${image.name}`} alt={image.name} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
