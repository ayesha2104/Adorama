import React from "react";
import "./NavLogo.css";
import { Link } from 'react-router-dom';
import {SearchIcon} from  "@chakra-ui/icons";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { ChevronDownIcon } from "@chakra-ui/icons";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";

const NavLogo = () => {
  return (
    <div className="navLogo">
      <div className="leftSide">
       ADORAMA
      </div>
      
      <div className="rightSide">
      <div className="searchBox">
        <input type="search" placeholder="Search" />
        <button className="searchIcon">
        <SearchIcon style={{ fontSize: 14 }} className="flip-vertical"/>
        </button>
      </div>
     <Link to="/login">
        <div className="SignIn">
          <PersonOutlineOutlinedIcon sx={{ color: "white" }} style={{ fontSize: 38 }}/>
         <div className="Account">
         <div className="signInText">Sign In</div>
         <div className="myAccountText">My Account <ChevronDownIcon/></div>
         </div>
         
        </div>
        </Link>      
         <Link to="./cart">
        <div className="Cart">
          <ShoppingCartOutlined sx={{ color: "white" }} style={{ fontSize: 38 }}/>
        </div>
        </Link>
        </div>
        
    </div>
  );
};

export default NavLogo;
