import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const speakers = [
  {
    name: "John Doe",
    image: "https://via.placeholder.com/200x300?text=Speaker+1",
    description: "An expert in the field of AI."
  },
  {
    name: "Jane Smith",
    image: "https://via.placeholder.com/200x300?text=Speaker+2",
    description: "A renowned speaker on Blockchain technology."
  },
  {
    name: "Alice Johnson",
    image: "https://via.placeholder.com/200x300?text=Speaker+3",
    description: "Specialist in Cybersecurity."
  },
  // Add more speakers as needed
];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const { transform, opacity } = useSpring({
    transform: `rotateY(${index * -90}deg)`,
    opacity: index === 0 ? 1 : 0.5,
  });

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % speakers.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + speakers.length) % speakers.length);
  };

  return (
    <div className="carousel-container">
      <animated.div
        className="carousel"
        style={{
          transform,
          opacity,
        }}
      >
        {speakers.map((speaker, i) => (
          <div
            key={i}
            className="carousel-item"
            style={{
              transform: `rotateY(${i * 90}deg)`,
              opacity: index === i ? 1 : 0.5,
            }}
          >
            <img src={speaker.image} alt={speaker.name} />
            <h3>{speaker.name}</h3>
            <p>{speaker.description}</p>
          </div>
        ))}
      </animated.div>
      <button onClick={prevSlide} className="carousel-button left">
        &#10094;
      </button>
      <button onClick={nextSlide} className="carousel-button right">
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;