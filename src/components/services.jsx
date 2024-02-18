import React, { useState, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import styles, { layout } from "../style";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { services } from '../constants/index';

const ServiceCard = ({ title, value }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Display tooltip only when the card is in view
          setShowTooltip(true);

          const tooltipTimer = setTimeout(() => {
            setShowTooltip(false);
          }, 3000); // Adjust the duration as needed (3 seconds in this example)

          return () => clearTimeout(tooltipTimer);
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []); // Run this effect only on mount

  return (
    <section className={layout.section} id="service">
      <div className={layout.sectionInfo} data-aos='fade-left'>
        <h1 className={styles.heading3}>
          Services
        </h1>
        <div
          id="service"
          ref={cardRef}
          className="w-196 text-justify shadow-md p-6 rounded-lg text-white h-auto overflow-y-auto relative"
        >
          {showTooltip && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 text-white p-2 rounded">
              Swipe to navigate
            </div>
          )}

          <h2 className="text-4xl font-bold mb-4 text-center">{title}</h2>
          <div className="text-lg">
            {value.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Serv = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSwipe = (direction) => {
    if (direction === 'left') {
      setCurrentIndex((prevIndex) =>
        prevIndex === services.length - 1 ? 0 : prevIndex + 1
      );
    } else if (direction === 'right') {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? services.length - 1 : prevIndex - 1
      );
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('left'),
    onSwipedRight: () => handleSwipe('right'),
  });

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  const nextCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container mx-auto my-8 max-h-164 transition-all duration-500 ease-in-out" {...handlers}>
      <div className="h-50">
        <div className="col-span-1 sm:col-span-2 flex items-center justify-center relative">
          {!isMobile && (
            <button
              onClick={prevCard}
              className={`text-6xl text-white ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
              disabled={currentIndex === 0}
            >
              <span role="img" aria-label="Previous">
                <FaAngleLeft />
              </span>
            </button>
          )}

          <ServiceCard {...services[currentIndex]} />

          {!isMobile && (
            <button
              onClick={nextCard}
              className={`text-6xl text-white cursor-pointer ${currentIndex === services.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={currentIndex === services.length - 1}
            >
              <span role="img" aria-label="Next">
                <FaAngleRight />
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Serv;
