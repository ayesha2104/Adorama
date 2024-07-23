import React from 'react';
import Slider from 'react-slick';
import './Inspired.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import images
import Image1 from "./image1.png";
import Image2 from "./image2.png";
import Image3 from "./image3.png";
import Image4 from "./image4.png";
import Image5 from "./image5.png";
import Image6 from "./image6.png";
import Image7 from "./image7.png";
import Image8 from "./image8.png";
import Image9 from "./image9.png";
import Image10 from "./image10.png";
import Image11 from "./image11.png";
import Image12 from "./image12.png";

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
    // Add more images as needed
  ];

  return (
    <div className='inspired'>
      <div className="heading">
        INSPIRED BY YOUR SHOPPING TRENDS
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
