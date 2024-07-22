import React from "react";
import "./ShopCat.css";
import Slider from "react-slick";
import "./ShopCat.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ShopCat = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 11,
    slidesToScroll: 1,  
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="shopCat">
     <div className='heading'>
        SHOP BY CATEGORY
      </div>
      <Slider {...settings}>
        {Array.from({ length: 12 }, (_, index) => (
          <div key={index} className="slide">
            <img
              src={`https://via.placeholder.com/114?text=Slide+${index + 1}`}
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
