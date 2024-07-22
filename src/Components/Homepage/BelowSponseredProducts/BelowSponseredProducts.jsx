import React from 'react'
import './BelowSponseredProducts.css'
import preown from './preown.webp'
import  sell from  './sell.webp'
import classroom from './classroom.webp'
import rentals from './rentals.jpg'
import buisness from './buisness.webp'
import printique from './printique.webp'


const BelowSponseredProducts = () => {
    return (
      <div className='belowspons'>
        <div className='image-container'>
          <img src={preown} alt="Pre Owned" />
          <div className='text-overlay' id='preown'>
             Shop Pre-Owned
             <p>Save Money On Used, Open Box, and Refurbished Equipment & Electronics.</p>
          </div>
        </div>
        <div className='image-container'>
          <img src={sell} alt="Sell" />
          <div className='text-overlay' id='sell'>
          Sell or Trade
          <p>Exchange Your Gear For Used <br/>
          Items Cash or Credit Toward<br/> Future Purchases.  
         </p>
          </div>
        </div>
        <div className='image-container'>
          <img src={classroom} alt="Classroom" />
          <div className='text-overlay' id='classroom'>Classroom<br/>
             Connect
             <p>Exclusive educational discounts<br/>on thousands of products in<br/>photography, video, audio, & more.</p>

          </div>
        </div>
        <div className='image-container'>
          <img src={rentals} alt="Rentals" />
          <div className='text-overlay' id='rentals'>
           Adorama Rentals
           <p>Providing the creative community<br/>
           with cameras, lenses, lighting & <br/>
           grip with two convenient locations<br/>
            in NYC.
           </p>
          </div>
        </div>
        <div className='image-container'>
          <img src={buisness} alt="Buisness" />
          <div className='text-overlay' id='buisness'>
            Adorama <br/>Business
            <p>Schedule a consultation, browse<br/>
             financing options & purchase gear <br/>for your corporate, educational or<br/> government institution.</p>

          </div>
        </div>
        <div className='image-container'>
          <img src={printique} alt="Printique" />
          <div className='text-overlay' id='printique'>Printique
            <p>Discover a world of options for<br/>
             printing and preserving your<br/>
              photographs.</p>

          </div>
        </div>
      </div>
    );
  }
  
  export default BelowSponseredProducts;