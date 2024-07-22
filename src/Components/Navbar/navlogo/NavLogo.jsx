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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 49">
  <symbol xmlns="http://www.w3.org/2000/svg" id="a" viewBox="0 0 300 49">
    <path d="M27.42 2.608a4.256 4.256 0 0 0-7.809 0L.035 47.644a.416.416 0 0 0 .381.581h5.47a4.85 4.85 0 0 0 4.446-2.915l2.653-6.1h21.039l2.646 6.097a4.85 4.85 0 0 0 4.447 2.918h5.537a.368.368 0 0 0 .338-.514ZM16.687 30.697l6.829-15.704 6.814 15.704Zm141.05-19.509a18.2 18.2 0 0 0-12.017.84 18.4 18.4 0 0 0-3.41 1.937 5.24 5.24 0 0 0-4.618-2.703h-2.696a.49.49 0 0 0-.49.49v35.974a.5.5 0 0 0 .5.5h2.686a5.296 5.296 0 0 0 5.327-5.328v-13.62a10.5 10.5 0 0 1 .79-4.01 10.2 10.2 0 0 1 3.616-4.497 9.7 9.7 0 0 1 2.577-1.268 9.7 9.7 0 0 1 5.677-.05 1.016 1.016 0 0 0 1.294-.772l1.314-6.61a.763.763 0 0 0-.55-.883m98.819 10.104a14.8 14.8 0 0 0-1.371-3.526 12.55 12.55 0 0 0-6.614-5.733 17.8 17.8 0 0 0-6.454-1.099 20.8 20.8 0 0 0-4.458.45 15 15 0 0 0-3.322 1.131 12.5 12.5 0 0 0-2.411 1.523q-.177.142-.343.29a.496.496 0 0 1-.657.003 13 13 0 0 0-3.851-2.298 17.8 17.8 0 0 0-6.454-1.099 21 21 0 0 0-4.459.45 15 15 0 0 0-3.322 1.131l-.088.044a.49.49 0 0 1-.539-.055 5.2 5.2 0 0 0-3.412-1.242h-2.695a.49.49 0 0 0-.49.49v35.984a.49.49 0 0 0 .49.49h5.22l-.002-.005a2.883 2.883 0 0 0 2.805-2.88v-2.443s0-17.255.017-17.685a11 11 0 0 1 .29-2.236 5.3 5.3 0 0 1 .529-1.358 3.5 3.5 0 0 1 .579-.75 4.14 4.14 0 0 1 1.572-.927 10.6 10.6 0 0 1 3.505-.495 11 11 0 0 1 2.55.268 6 6 0 0 1 1.387.508 4 4 0 0 1 .786.534 4.1 4.1 0 0 1 .914 1.163 7.3 7.3 0 0 1 .728 2.378c.06.417.093.823.11 1.19.016.367.016 22.248.016 22.248a.49.49 0 0 0 .49.49h5.22a2.803 2.803 0 0 0 2.803-2.804s0-19.778.018-20.21a11 11 0 0 1 .288-2.235 5.3 5.3 0 0 1 .53-1.358 3.4 3.4 0 0 1 .58-.75 4.1 4.1 0 0 1 1.571-.927 10.6 10.6 0 0 1 3.505-.495 11 11 0 0 1 2.55.268 6 6 0 0 1 1.387.508 3.96 3.96 0 0 1 1.7 1.697 7.3 7.3 0 0 1 .729 2.378c.06.417.093.823.109 1.19s.017 21.721.017 21.721a1.016 1.016 0 0 0 1.016 1.016h4.604a2.89 2.89 0 0 0 2.892-2.892V26.47c0-.3 0-.781-.025-1.357a19 19 0 0 0-.54-3.82M83.74.046h-2.728a5.337 5.337 0 0 0-5.327 5.327v9.043a18.15 18.15 0 0 0-17.104-1.452 18.54 18.54 0 0 0-8.09 6.808 18.92 18.92 0 0 0 4.955 25.954 18.15 18.15 0 0 0 20.939-.19 5.22 5.22 0 0 0 4.627 2.69h2.602a.583.583 0 0 0 .583-.584V.502a.456.456 0 0 0-.457-.456M65.76 40.442a10.227 10.227 0 1 1 10.226-10.227 10.227 10.227 0 0 1-10.227 10.227m130.502-29.18h-2.637a5.28 5.28 0 0 0-4.955 3.401 18.16 18.16 0 0 0-17.475-1.699 18.54 18.54 0 0 0-8.091 6.808 19.05 19.05 0 0 0-1.687 17.707 18.7 18.7 0 0 0 6.643 8.247 18.14 18.14 0 0 0 20.938-.19 5.22 5.22 0 0 0 4.627 2.69h2.627a.56.56 0 0 0 .558-.559V11.81a.55.55 0 0 0-.548-.548m-17.867 29.073a10.227 10.227 0 1 1 10.227-10.227 10.227 10.227 0 0 1-10.227 10.227m121.058-29.073h-2.637a5.28 5.28 0 0 0-4.956 3.401 18.16 18.16 0 0 0-17.475-1.699 18.54 18.54 0 0 0-8.09 6.808 19.05 19.05 0 0 0-1.687 17.707 18.7 18.7 0 0 0 6.643 8.247 18.14 18.14 0 0 0 20.938-.19 5.22 5.22 0 0 0 4.627 2.69h2.626a.56.56 0 0 0 .559-.559V11.81a.55.55 0 0 0-.548-.548m-17.867 29.073a10.227 10.227 0 1 1 10.227-10.227 10.227 10.227 0 0 1-10.227 10.227M113.387 15.096a.673.673 0 0 1-.673-.673.673.673 0 0 1-.673.673.673.673 0 0 1 .673.673.673.673 0 0 1 .673-.673"/>
    <ellipse cx="115.406" cy="16.394" rx=".651" ry=".671"/>
    <path d="M115.406 14.423a.673.673 0 0 1-.673.673.673.673 0 0 1 .673.673.673.673 0 0 1 .674-.673.673.673 0 0 1-.674-.673m-.673.673a.673.673 0 0 1-.673-.673.673.673 0 0 1-.673.673.673.673 0 0 1 .673.673.673.673 0 0 1 .673-.673"/>
    <path d="M122.147 42.718a.671.671 0 0 1 1.318-.183 18.7 18.7 0 0 0 3.491-5.884 1 1 0 0 1-.097.01.673.673 0 1 1 .47-1.155 18.75 18.75 0 0 0-.154-11.08.7.7 0 0 1-.313.08.673.673 0 0 1-.673-.673.673.673 0 1 1-.673-.674.673.673 0 0 1 .673.674.67.67 0 0 1 .53-.657q-.326-.803-.722-1.566a.672.672 0 1 1-.628-1.126q-.25-.409-.52-.804a.68.68 0 1 1-.335-.471 18.8 18.8 0 0 0-6.606-5.664.67.67 0 0 1-.482.205.673.673 0 1 1-.673.673.673.673 0 0 1-.673.673.672.672 0 0 1 .021 1.344.67.67 0 0 1 .652.67.673.673 0 1 1 .673.674.673.673 0 0 1-.673-.673.673.673 0 0 1-1.347 0 .673.673 0 1 1-.694-.671.67.67 0 0 1-.652-.671.673.673 0 0 1-1.346 0 .673.673 0 0 1-.673.673.673.673 0 1 1-.673.673.673.673 0 0 1 .673-.673.673.673 0 0 1-.673-.673.673.673 0 1 1-.673-.673.673.673 0 0 1 .673.673.673.673 0 0 1 .673-.673.673.673 0 0 1 0-1.346.673.673 0 0 1-.673-.673.673.673 0 0 1-1.346 0 .673.673 0 0 1-.673.673.673.673 0 1 1-.673.673.673.673 0 0 1 .673-.673.673.673 0 1 1 .673-.673.673.673 0 0 1 1.346 0 .673.673 0 1 1 .673.673.673.673 0 0 1 .673.673.673.673 0 0 1 1.346 0 .673.673 0 0 1 .673-.673.673.673 0 1 1 .673-.673.673.673 0 0 1-.673.673.673.673 0 0 1 .673.673.673.673 0 0 1 1.347 0 .673.673 0 0 1 .673-.673.673.673 0 0 1-.673-.673l.007-.077a18.6 18.6 0 0 0-2.785-.948.669.669 0 0 1-1.255-.268 18.737 18.737 0 1 0 1.418 36.55.672.672 0 1 1 1.278-.389 18.74 18.74 0 0 0 7.27-4.567.67.67 0 0 1-.539-.66m-2.689-18.885a.673.673 0 1 1 1.346 0 .673.673 0 1 1 .673.673.673.673 0 0 1-.673-.673.673.673 0 0 1-.673.673.673.673 0 1 1-.673.673.673.673 0 0 1 .673-.673.673.673 0 0 1-.673-.673m3.366 2.019a.673.673 0 1 1-.673.673.673.673 0 1 1-.674-.673.673.673 0 0 1 .674.673.673.673 0 0 1 .673-.673m-1.35 8.117a.673.673 0 1 1 .673-.674.673.673 0 0 1-.673.674m.673 3.365a.673.673 0 1 1-.673-.673.673.673 0 0 1 .673.673m-.673-4.725a.673.673 0 1 1 .673-.673.673.673 0 0 1-.673.673m0-2.719a.673.673 0 1 1 .673-.673.673.673 0 0 1-.673.673m1.348 1.346a.673.673 0 1 1 .673-.673.673.673 0 0 1-.673.673m1.345 1.386a.673.673 0 1 1-.673.673.673.673 0 0 1 .673-.673m.673 4.712a.673.673 0 0 1-.673.673.673.673 0 0 1 .009 1.345.673.673 0 1 1-.019 0 .673.673 0 0 1 .01-1.345.673.673 0 0 1 0-1.346.673.673 0 1 1 .673-.673.673.673 0 0 1-.673.673.673.673 0 0 1 .673.673m.673-2.02a.673.673 0 1 1 .673-.672.673.673 0 0 1-.673.673m-.672-4.75a.673.673 0 1 1 .673.672.673.673 0 0 1-.673-.673m2.02 2.018a.673.673 0 1 1 .673-.673.673.673 0 0 1-.674.673m.001-2.692a.673.673 0 1 1 .673-.673.673.673 0 0 1-.673.673m0-4.038a.673.673 0 1 1-.673.673.673.673 0 0 1 .673-.673m-1.346 1.346a.673.673 0 1 1-.673.673.673.673 0 0 1-.673.673.673.673 0 1 1-.673.673.673.673 0 0 1 .673-.673.673.673 0 1 1 .673-.673.673.673 0 0 1 .673-.673m-2.02-2.02a.673.673 0 1 1 .674.674.673.673 0 0 1-.673-.673m.674-3.365a.673.673 0 1 1-.673.673.673.673 0 1 1-.673-.673.673.673 0 0 1 .673.673.673.673 0 0 1 .673-.673m-1.392-4.025a.672.672 0 0 1 .095 1.337.674.674 0 1 1-.131.006.672.672 0 0 1 .036-1.343m-.618 2.006a.673.673 0 1 1-.674-.673.673.673 0 0 1 .674.673m-2.042-3.356a.673.673 0 0 1 .673.673.673.673 0 1 1 .673.673.673.673 0 0 1-.673-.673.673.673 0 1 1-.673-.673m-1.346-1.342a.673.673 0 1 1-.673.673.673.673 0 0 1 .673-.673m-1.364 2.692a.67.67 0 0 1 .67.655.671.671 0 0 1 1.343 0 .673.673 0 1 1 0 .036.67.67 0 0 1-.588.647.671.671 0 0 1-.048 1.341.673.673 0 0 1 .673.673.673.673 0 1 1 1.346 0 .673.673 0 1 1 .673.673.673.673 0 0 1-.673-.673.673.673 0 0 1-1.346 0 .673.673 0 0 1-.673.673.673.673 0 1 1-.673.673.673.673 0 0 1 .673-.673.673.673 0 0 1 0-1.346.671.671 0 0 1-.083-1.338.67.67 0 0 1-.623-.65.672.672 0 1 1-.671-.69m.031 4.036a.673.673 0 1 1 .673-.673.673.673 0 0 1-.673.673m-1.355-2.703a.673.673 0 1 1-.673.673.673.673 0 0 1 .673-.673m-1.35 0a.673.673 0 1 1-.674.673.673.673 0 0 1 .673-.673m-1.354-1.333a.673.673 0 1 1-.673.673.673.673 0 0 1 .673-.673m-4.704-.673a.673.673 0 1 1 .673.673.673.673 0 0 1 .673.673.673.673 0 1 1 .673.673.673.673 0 0 1-.673-.673.673.673 0 1 1-.673-.673.673.673 0 0 1-.673-.673m-2.02-4.711a.673.673 0 1 1-.672.673.673.673 0 0 1 .673-.673m0 4.038a.673.673 0 1 1-.672.673.673.673 0 0 1 .673-.673M95.91 38.007a.673.673 0 1 1 .673-.673.673.673 0 0 1-.673.673m4.039 5.384a.673.673 0 1 1 .673-.673.673.673 0 0 1-.673.673m2.692-2.692a.673.673 0 1 1 .673-.673.673.673 0 0 1-.673.673m2.692 4.039a.673.673 0 1 1 .673-.673.673.673 0 0 1-.673.673m2.698 2.692a.673.673 0 1 1 .673-.673.673.673 0 0 1-.673.673m1.34-4.039a.673.673 0 1 1 .674-.673.673.673 0 0 1-.673.673m4.04 2.658a.673.673 0 1 1 .672-.673.673.673 0 0 1-.673.673m-.713-4.677a.673.673 0 1 1 .673.673.673.673 0 0 1-.673-.673m-3.345-.93a10.227 10.227 0 1 1 10.227-10.227 10.227 10.227 0 0 1-10.227 10.227m8.076 2.95a.673.673 0 1 1 .673-.674.673.673 0 0 1-.673.673m0-2.693a.673.673 0 1 1 .673-.673.673.673 0 0 1-.673.673m1.335-2.692a.673.673 0 1 1 .673-.673.673.673 0 0 1-.673.673m1.357 6.73a.673.673 0 1 1 .673-.672.673.673 0 0 1-.673.673m.673-3.365a.673.673 0 1 1-.673-.673.673.673 0 1 1 .673-.673.673.673 0 0 1-.673.673.673.673 0 0 1 .673.673m.681-.673a.673.673 0 1 1 .673-.673.673.673 0 0 1-.673.673"/>
  </symbol>
  <use href="#a"/>
</svg>

      </div>
      
      <div className="rightSide">
      <div className="searchBox">
        <input type="search" placeholder="Search" />
        <button className="searchIcon">
        <SearchIcon style={{ fontSize: 14 }} className="flip-vertical"/>
        </button>
      </div>
     <Link to="./Login">
        <div className="SignIn">
          <PersonOutlineOutlinedIcon sx={{ color: "white" }} style={{ fontSize: 38 }}/>
         <div className="Account">
         <div className="signInText">Sign In</div>
         <div className="myAccountText">My Account <ChevronDownIcon/></div>
         </div>
         
        </div>
        </Link>        
        <div className="Cart">
          <ShoppingCartOutlined sx={{ color: "white" }} style={{ fontSize: 38 }}/>
        </div>
        </div>

    </div>
  );
};

export default NavLogo;
