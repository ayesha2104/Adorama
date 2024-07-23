import React from "react";
import "./ShopCat.css";
import Slider from "react-slick";
import "./ShopCat.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
import Image1 from "./cameraCat.png";
import Image2 from "./lensCat.png";
import Image3 from "./lightning.png";
import Image4 from "./Computers.png";
import Image5 from "./Video.png";
import Image6 from "./Audio.png";
import Image7 from "./Home.png";
import Image8 from "./Opticals.png";
import Image9 from "./Accesories.png";
import Image10 from "./Drones.png";
import Image11 from "./Gaming.png";
import Image12 from "./Music.png";
// Import more images as needed

const ShopCat = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,  
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  // Array of imported images with text
  const images = [
    { src: Image1, text: "Camera" },
    { src: Image2, text: "Lenses" },
    { src: Image3, text: "Lightning" },
    { src: Image4, text: "Computers" },
    { src: Image5, text: "Video" },
    { src: Image6, text: "Audio" },
    { src: Image7, text: "Home Electronics" },
    { src: Image8, text: "Optics & Binoculars" },
    { src: Image9, text: "Photo Accessories" },
    { src: Image10, text: "Drones" },
    { src: Image11, text: "Gaming" },
    { src: Image12, text: "Music" },
    // Add more images as needed
  ];

  return (
    <div className="shopCat">
      <div className='heading'>
        SHOP BY CATEGORY
      </div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img
              src={image.src}
              alt={`Category ${index + 1}`}
            />
            <p>{image.text}</p>
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
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

export default ShopCat;
