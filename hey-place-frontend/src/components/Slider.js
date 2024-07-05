import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const slides = [
  { src: 'path/to/slide1.jpg', alt: 'Slide 1' },
  { src: 'path/to/slide2.jpg', alt: 'Slide 2' },
  { src: 'path/to/slide3.jpg', alt: 'Slide 3' }
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SliderContainer>
      {slides.length > 0 && slides.map((slide, index) => (
        <Slide
          key={index}
          src={slide.src}
          alt={slide.alt}
          visible={index === currentSlide}
          onClick={() => setCurrentSlide(index)}
        />
      ))}
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const Slide = styled.img`
  width: 100%;
  height: 400px;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
`;

export default Slider;
