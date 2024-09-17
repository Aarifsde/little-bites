import { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import com1 from '../assets/company-1.svg'
import com2 from '../assets/company-2.svg'
import com3 from '../assets/company-3.svg'

const images = [
  com1,
  com2,
  com3,
  com1,
  com2,
  com3,
  com1
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <button className="prev" onClick={prevImage}>‹</button>
      <div className="carousel-slide">
        <img src={images[currentIndex]} alt="Carousel" className="carousel-image" />
      </div>
      <button className="next" onClick={nextImage}>›</button>
    </div>
  );
};

export default Carousel;
