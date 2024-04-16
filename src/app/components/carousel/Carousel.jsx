// Componente Carousel
import React, { useState, useEffect } from "react";
import "./carousel.css";
import { Link } from "react-router-dom";

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 7500);

    return () => clearInterval(interval);
  }, [slides]);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <div className="carousel">
      <div className="slide-container" style={{ width: `${slides.length * 100}%`, transform: `translateX(-${currentIndex * (100 / slides.length)}%)` }}>
        {slides.map((slide, index) => (
          <Link key={index} to={slide.link} className={`slide ${index === currentIndex ? 'active' : ''}`}>
            <img src={slide.image} alt={`Slide ${index + 1}`} />
          </Link>
        ))}
      </div>
      <button className="prev" onClick={goToPreviousSlide}>
        &#10094;
      </button>
      <button className="next" onClick={goToNextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
