

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Image, Text } from '@chakra-ui/react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import { CheckCircleIcon, StarIcon } from '@chakra-ui/icons';

const SingleProduct = () => {
  const [product, setProduct] = useState(null); 
  const { id } = useParams();

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const foundProduct = products.find((p) => p.id === id);
    setProduct(foundProduct || {});
  }, [id]);

  const handleCart = () => {
    if (product) {
      let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      cartItems.push(product);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      alert('Item has been added to cart');
    } else {
      alert('Product not found');
    }
  };

  if (!product) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex', gap: '50px', marginLeft: '100px' }}>
        <Box boxSize='sm'>
          <Image
            style={{ height: '300px', marginTop: '20px' }}
            src={product.image || 'https://www.adorama.com/images/product/ISOA7M3K.JPG'}
            alt={product.name || 'Adorama\src\Components\Homepage\OurTopDeals\camera.png'}
          />
        </Box>
        <div>
          <div style={{ width: '800px', marginTop: '10px' }}>
            <div style={{ fontSize: '30px', textAlign: 'left' }}>
              {product.name || 'Sony Alpha a7 III 24MP UHD 4K Mirrorless Camera with FE 28-70mm Lens'}
              <br />
              <div style={{ textAlign: 'left', fontSize: '12px', marginTop: '10px' }}>
                {product.description || 'High-performance Z8 Mirrorless Digital Camera with 45.7MP full-frame sensor for stunning stills,NIKKOR Z 24-120mm f/4 S Lens with versatile zoom range and exquisite image quality,Advanced video capabilities with internal 8K/60p and 4K/120p recording,Agile, modular, and lightweight design for comfortable handling and smooth movement,Enhanced file formats including 12-bit N-RAW and ProRes RAW HQ for optimal editing flexibility'}
              </div>
              <div style={{ fontSize: '15px' }}>
                <StarIcon style={{ color: 'rgb(250, 189, 4)' }} />
                {product.rating || '5'}
              </div>
              <div style={{ marginTop: '10px' }}>
                <Text as='b'>${product.price || '4,696.95'}</Text>
              </div>
              <br />
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  style={{
                    backgroundColor: 'rgb(228, 112, 70)',
                    color: 'white',
                    fontSize: '25px',
                    borderRadius: '5px',
                    width: '300px',
                    height: '60px'
                  }}
                  onClick={handleCart}
                >
                  Add to Cart
                </button>
              </div>
              <div style={{ display: 'flex', gap: '80px' }}>
                <p style={{ color: 'green', fontSize: '15px', marginTop: '5px' }}>
                  <CheckCircleIcon style={{ color: 'green' }} /> In Stock & Ready to Ship
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleProduct;
