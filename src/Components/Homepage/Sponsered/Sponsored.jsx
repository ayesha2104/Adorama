import React from 'react';
import Slider from 'react-slick';
import './Sponsered.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import images
import Image1 from "./chip1.png";
import Image2 from "./chip2.png";
import Image3 from "./chip3.png";
import Image4 from "./chip4.png";
import Image5 from "./chip5.png";
import Image6 from "./chip6.png";
import Image7 from "./chip1.png";
import Image8 from "./chip2.png";
import Image9 from "./chip3.png";
import Image10 from "./chip4.png";
import Image11 from "./chip5.png";
import Image12 from "./chip6.png";
import Image13 from "./chip1.png";
import Image14 from "./chip2.png";
import Image15 from "./chip3.png";

// Import more images as needed

const Sponsered = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Array of imported images
  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
    Image12,
    Image13,
    Image14,
    Image15,
    // Add more images as needed
  ];

  return (
    <div className='inspired'>
      <div className="heading">
        SPONSERED
      </div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', width: '30px', height: '30px', background: 'transparent' }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', width: '30px', height: '30px', background: 'transparent' }}
      onClick={onClick}
    />
  );
};

export default Sponsered;
