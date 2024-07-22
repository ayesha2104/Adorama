import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Homeslider.css";
import imageslider1 from "./imageslider1.webp";
import imageslider2 from "./imageslider2.webp";
import imageslider3 from "./imageslider3.webp";
import imageslider4 from "./imageslider4.webp";
import imageslider5 from "./imageslider5.webp";
import imageslider6 from "./imageslider6.webp";
import imageslider7 from "./imageslider7.webp";
import imageslider8 from "./imageslider8.webp";

function Homeslider() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div className="slider-container">
      <Slider ref={sliderRef} {...settings}>
        <div>
          <img src={imageslider1} alt="image1"/>
        </div>
        <div>
          <img src={imageslider2} alt="image2"/>
        </div>
        <div>
          <img src={imageslider3} alt="image3"/>
        </div>
        <div>
          <img src={imageslider4} alt="image4"/>
        </div>
        <div>
          <img src={imageslider5} alt="image5"/>
        </div>
        <div>
          <img src={imageslider6} alt="image6"/>
        </div>
        <div>
          <img src={imageslider7} alt="image7"/>
        </div>
        <div>
          <img src={imageslider8} alt="image8"/>
        </div>
      </Slider>
    </div>
  );
}

export default Homeslider;
