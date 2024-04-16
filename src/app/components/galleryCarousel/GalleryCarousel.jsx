import React, { useState, useEffect } from "react";
import './galleryCarousel.css';
import './galleryCarousel.scss';

const GalleryCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
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
        {images.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={`gallery ${index + 1}`}
            style={{ width: "300px", height: "300px" }}
          />
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
