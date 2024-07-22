import React from 'react';
import Slider from 'react-slick';
import './Inspired.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

  return (
    <div className='inspired'>
      <div className="heading">
        INSPIRED BY YOUR SHOPPING TRENDS
      </div>
      <Slider {...settings}>
        {Array.from({ length: 14 }, (_, index) => (
          <div key={index} className="slide">
            <img
              src={`data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0PDQ0NDQ0NDQ0NDQ0NDQ0PDQ8PDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMvNygtLisBCgoKDQ0NDg0NDisZFRkrLSs3KysrKysrLS0rLS0rKysrKystKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAAAQIDBAUH/8QAJhABAQEAAQIFBAMBAAAAAAAAAAERAhJRMUFhkfADEyFxgbHxYv/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A/YBUVBSAALICGNYAmGKAYYsi4DPSvQ0fPNFY6E6HQVHLpMdmekVzxMdOlMEYMbAY6as4tGAgXWbQa1NQBdTU00VTU0ENFnFqQE6RoBkCACrIBIoAgKKEiyKIEFFRQEAxcRUAUBBAvFnL+2tFGBus4iIi4ihidKgqdJ0xUEMioArPPnnrfKJeV8vfyOHD+b50GPtW/m+N9aPRgKwosEJFAAFgIsigAKKACAKKAAKCAzY0KM4Y1YiCYllbIoxeN7M3jf8AXVUHC8b2Zy9r7PSKPLb+/anV+/Z6k6Z2B5tvb3Onv+f6enonY+3BHCRqR2n052aknYVw6b2o9ADy4qoAKCGKAoCgAAAoAAAKgAKCoqAliiiKCAfPIX55KJ88VBABcBFABQAAB5wFQUBQAQUEUBVABABVABABQAAFRQAFDDFEEwUUAEBQAAAFQHnUFAAQUBQABQQAFFAQAVQAQAUAAAFAAAAABQAAFRQAAecBUFRRQABQQAFBQQAFBQQAFFAQAUAAAAAFAAABQAAAAecFUABABFAFD54KfPE+eKBqoKKqKgAKCggAKKAgAAAAoAAACoAoigCagOQxefozfqVR1Rx+5T7oO44T617b/FX73/N94DsRzn1p2vs192f7+AbGeuL1QFDYagLKgo0qSqgAKCggAAAAKAAJoKAAAAlq1ABFB4+VcryZ5c7bnH38o1w4Z63uqElvp6ebUnzxqgIuLi4CYooJG5UkBW4rCyg0qSxpA1ZUXAWVWVBoQBQAAUAE0C0gAoigJaWoCoWkAwUB8/hwyZGi8mPFUavKJ1GLgG0/K4ALLTFwUlalTFwRVSGg0RnqOoV0nJqVy6l1B1GJyWcgbVmcooKAAWpqAtpEVRRNTUGqmoAoAI1EUAAHz8XAVFxcAUxZAEXFwACqAzpgAKAAoKKALpoAu3uuggbV2goaoIAooCiAAooCAAqP/9k=`}
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
