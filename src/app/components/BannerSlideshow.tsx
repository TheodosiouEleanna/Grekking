import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/images/pexels-eberhardgross-1183021.jpg",
  "/images/pexels-sagui-andrea-200115-618848.jpg",
  "/images/pexels-saikat-ghosh-323099-914128.jpg",
  "/images/pexels-simonmigaj-746386.jpg",
  "/images/pexels-stanswinnen-6465964.jpg",
  "/images/pexels-yogendras31-1469880.jpg",
];

const BannerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [transition, setTransition] = useState(true);

  // Create an extended images array for looping effect
  const extendedImages = [images[images.length - 1], ...images, images[0]];

  const handleNext = () => {
    setTransition(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevious = () => {
    setTransition(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  useEffect(() => {
    if (currentIndex === extendedImages.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setCurrentIndex(1);
      }, 700);
    } else if (currentIndex === 0) {
      setTimeout(() => {
        setTransition(false);
        setCurrentIndex(extendedImages.length - 2);
      }, 700);
    }
  }, [currentIndex, extendedImages.length]);

  return (
    <div className='relative w-full h-[500px] overflow-hidden'>
      {/* Carousel Wrapper */}
      <div
        className={`flex ${
          transition ? "transition-transform duration-700 ease-in-out" : ""
        }`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {extendedImages.map((image, index) => (
          <div key={index} className='relative w-full flex-shrink-0'>
            {/* Image with Overlay */}
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              width={1000}
              height={400}
              layout='responsive'
              objectFit='cover'
              className='w-full h-full'
            />
            <div className='absolute inset-0 bg-black opacity-30' />{" "}
            {/* Dark overlay */}
          </div>
        ))}
      </div>

      {/* Previous and Next Buttons */}
      <button
        onClick={handlePrevious}
        className='absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-40 p-2 rounded-full hover:bg-opacity-70'
      >
        &#10094;
      </button>
      <button
        onClick={handleNext}
        className='absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-40 p-2 rounded-full hover:bg-opacity-70'
      >
        &#10095;
      </button>

      {/* Image Indicators */}
      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index + 1)}
            className={`w-3 h-3 rounded-full ${
              index + 1 === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
