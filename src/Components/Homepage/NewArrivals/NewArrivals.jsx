import React from 'react';
import Slider from 'react-slick';
import './NewArrivals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import images
import Image1 from "./Camera1.png";
import Image2 from "./Camera2.png";
import Image3 from "./Camera3.png";
import Image4 from "./Camera4.png";
import Image5 from "./Camera5.png";
import Image6 from "./Camera6.png";
import Image7 from "./Camera7.png";
import Image8 from "./Camera1.png";
import Image9 from "./Camera2.png";
import Image10 from "./Camera3.png";
import Image11 from "./Camera4.png";
import Image12 from "./Camera5.png";
import Image13 from "./Camera6.png";

// Import more images as needed

const Inspired = () => {
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
          slidesToShow: 5,
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
    Image13
    // Add more images as needed
  ];

  return (
    <div className='inspired'>
      <div className="heading">
        NEW ARRIVALS
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

export default Inspired;
