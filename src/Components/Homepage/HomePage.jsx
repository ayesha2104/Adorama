import React from 'react'
import Homeslider from './Homeslider/Homeslider'
import "./HomePage.css"
import OurTopDeals from './OurTopDeals/OurTopDeals';
import ShopCat from './ShopCat/ShopCat';
import Inspired from './Inspired/Inspired';
import NewArrivals from './NewArrivals/NewArrivals';
import Flamingo from './Flamingo/Flamingo';
import BelowFlamingo from './BelowFlamingo/BelowFlamingo';
import BestSellers from './BestSellers/BestSellers';
import Sponsered from './Sponsered/Sponsored';
import BelowSponseredProducts from './BelowSponseredProducts/BelowSponseredProducts';




function HomePage() {
  return (
    <>
      <div className='homepage'>

        <Homeslider />
        <OurTopDeals />
        <ShopCat/>
        <Inspired/>
        <NewArrivals/>
        <Flamingo/>
        <BelowFlamingo/>
        <BestSellers/>
        <Sponsered/>
        <BelowSponseredProducts/>
      </div>
    </>
  );
}

export default HomePage;
