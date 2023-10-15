import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import "./Corousal.css"
const Corousal = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
// console.log("slides : ",slides);
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
    <div className="corousalImages">



      {
      slides ? (
      slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide} alt='Product Image' className='image' />
            )}
          </div>
        );
      })
      ) : " "
    
    }
      </div>
      <div className="arrow_button">
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <span>
        {current + 1}
      </span>
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      </div>
    </section>
  );
};

export default Corousal;