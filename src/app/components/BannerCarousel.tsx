import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  { label: "Image 1", file: "/images/pexels-eberhardgross-1183021.jpg" },
  { label: "Image 2", file: "/images/pexels-sagui-andrea-200115-618848.jpg" },
  { label: "Image 2", file: "/images/pexels-saikat-ghosh-323099-914128.jpg" },
  { label: "Image 2", file: "/images/pexels-simonmigaj-746386.jpg" },
  { label: "Image 2", file: "/images/pexels-stanswinnen-6465964.jpg" },
  { label: "Image 2", file: "/images/pexels-yogendras31-1469880.jpg" },
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
    <>
      <div className='relative w-full flex justify-center'>
        {/* Carousel Wrapper */}
        <div
          className={`flex ${
            transition ? "transition-transform duration-700 ease-in-out" : ""
          }`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {extendedImages.map((image, index) => (
            <div
              key={index}
              className='relative w-full h-[500px] flex justify-center flex-shrink-0'
            >
              {/* Image with Overlay */}
              <Image
                src={image.file}
                alt={`Slide ${index + 1}`}
                width={1000}
                height={400}
                layout='intrinsic'
                objectFit='cover'
                className='object-cover w-full h-full'
              />
              {/* Dark overlay */}
              <div className='absolute inset-0 flex justify-center items-center bg-black opacity-30' />
              <div className='absolute bottom-0 w-1/2 bg-[#343538] bg-opacity-80 p-4'>
                <h3 className='absolute inset-0 flex justify-center items-center text-white text-sm'>
                  {image.label}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Previous and Next Buttons */}
        <button
          onClick={handlePrevious}
          className='absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-[#343538] bg-opacity-40 p-2 hover:bg-opacity-70'
        >
          &#10094;
        </button>
        <button
          onClick={handleNext}
          className='absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-[#343538] bg-opacity-40 p-2 hover:bg-opacity-70'
        >
          &#10095;
        </button>

        {/* Image Indicators */}
      </div>
      <div className='h-8 flex justify-center items-center space-x-2 bg-gray-200'>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index + 1)}
            className={`w-2.5 h-2.5 rounded-full ${
              index + 1 === currentIndex
                ? "bg-[#343538] bg-opacity-80"
                : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default BannerCarousel;
