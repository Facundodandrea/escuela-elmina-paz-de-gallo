import React, { useState, useEffect } from "react";
import './galleryCarousel.css';
import './galleryCarousel.scss';
import supabase from '../../../supabase/Client';

const GalleryCarousel = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
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
        console.error('Error loading images:', error.message);
      }
    };

    fetchImages();

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 4 ? 0 : prevIndex + 1
      );
    }, 7500);
    setIntervalId(interval);

    return () => clearInterval(interval);
  }, [images]);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 4 : prevIndex - 1
    );
    resetInterval();
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 4 ? 0 : prevIndex + 1
    );
    resetInterval();
  };

  const resetInterval = () => {
    clearInterval(intervalId);
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 4 ? 0 : prevIndex + 1
      );
    }, 7500);
    setIntervalId(interval);
  };

  const adjustedIndex = currentIndex % images.length;

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="gallery">
      <div
        className="container gallery-container"
        style={{
          transform: `translateX(-${adjustedIndex * (300 + 10)}px)`,
        }}
      >
          {images.map((image, index) => (
            <div key={index} className="imgHolder">
              <img src={`https://mmtixvyvrhofccnmfjfw.supabase.co/storage/v1/object/public/images/${image.name}`} alt={image.name} />
            </div>
          ))}
      </div>
      <button className="next" onClick={goToNextSlide}>
        &#10095;
      </button>
      <button className="prev" onClick={goToPreviousSlide}>
        &#10094;
      </button>
    </div>
  );
};

export default GalleryCarousel;
