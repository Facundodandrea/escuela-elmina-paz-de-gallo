// Componente Carousel
import React, { useState, useEffect } from "react";
import "./carousel.css";
import { Link } from "react-router-dom";
import supabase from '../../../supabase/Client';

const Carousel = () => {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const decodeBase64Image = (base64String) => {
    const binaryString = atob(base64String);
    const byteArray = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      byteArray[i] = binaryString.charCodeAt(i);
    }
    return new Blob([byteArray], { type: 'image/png' });
  };

  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <div className="carousel">
      <div className="slide-container" style={{ width: `${slides.length * 100}%`, transform: `translateX(-${currentIndex * (100 / slides.length)}%)` }}>
        {slides.map((slide, index) => (
          <Link key={index} to={slide.link} className={`slide ${index === currentIndex ? 'active' : ''}`}>
            {slide.img_URL && <img src={URL.createObjectURL(decodeBase64Image(slide.img_URL))} alt={`Slide ${index + 1}`} />}
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
