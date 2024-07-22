import React from 'react'
import "./NavProducts.css";
import { ChevronDownIcon } from "@chakra-ui/icons";

const NavProducts = () => {
  return (
    <div className='navprod'>
      <div className="left">
        <a href="#">Products <ChevronDownIcon sx={{ color: "white" }}/></a>
        <a href="#">Brands <ChevronDownIcon sx={{ color: "white" }}/></a>
        <a href="#">Used <ChevronDownIcon sx={{ color: "white" }}/></a>
        <a href="#">Deals <ChevronDownIcon sx={{ color: "white" }}/></a>
      </div>
      <div className="right">
        <a href="#">Today's Top Deals</a>
        <a href="#">Adorama Credit Card</a>
        <a href="#">VIP Rewards</a>
        <a href="#">Gift Cards</a>
        <a href="#">EDU Program</a>
        <a href="#">Events</a>

      </div>
      
    </div>
  )
}

export default NavProducts
