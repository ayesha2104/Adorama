import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import './OurTopDeals.css';

// Sample product data (you can replace this with real data)
const products = [
  { id: 1,  image: 'https://via.placeholder.com/150' },
  { id: 2,  image: 'https://via.placeholder.com/150' },
  { id: 3,  image: 'https://via.placeholder.com/150' },
  { id: 4,  image: 'https://via.placeholder.com/150' },
  { id: 5,  image: 'https://via.placeholder.com/150' },
  { id: 6,  image: 'https://via.placeholder.com/150' },
  { id: 7,  image: 'https://via.placeholder.com/150' },
  { id: 8,  image: 'https://via.placeholder.com/150' },
  { id: 9,  image: 'https://via.placeholder.com/150' },
];

const OurTopDeals = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7, 
    slidesToScroll: 7,
    arrows: true,
    centerMode: false, 
  };

  return (
    <div className='ourTop'>
      <div className='heading'>
        <EmojiEventsOutlinedIcon style={{ fontSize: 54, color: "#408ac8" }} />
        Our Top Deals
      </div>
      <div className='slider-container'>
        <Slider {...settings}>
          {products.map(product => (
            <div key={product.id} className='product-card'>
              <img src={product.image} alt={product.name} />
              <div className='product-info'>
                <h3>{product.name}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default OurTopDeals;
