import React, { useState } from 'react';
import './Slider.css'; // Include CSS for styling

const Slider = ({ images }) => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((index + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      <div className="slides" style={{ transform: `translateX(-${index * 100}%)` }}>
        {images.map((image, i) => (
          <div key={i} className="slide">
            <img src={image} alt={`Slide ${i + 1}`} />
          </div>
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>Prev</button>
      <button className="next" onClick={nextSlide}>Next</button>
      <div className="slide-counter">{index + 1} / {images.length}</div>
    </div>
  );
};

export default Slider;


