import React from "react";
import "./NavHelp.css";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { ChatIcon } from "@chakra-ui/icons";

const NavHelp = () => {
  return (
    <div className="navhelp">
      <div className="left">
        <a href="#">BUISNESS,EDU,GOV</a>
        <a href="#">ADORAMA RENTALS</a>
        <a href="#">PRINTIQUE</a>
        <a href="#">OUR BLOG</a>
      </div>
      <div className="right">
        <div className="call">
          <CallOutlinedIcon sx={{ color: "white" }} />
          <span>800.223.2500</span>
        </div>
        <div className="msg">
          <ChatIcon sx={{ color: "white" }} />
          <span>Live Chat</span>
        </div>
        <div className="store">
          <LocationCityOutlinedIcon fontSize="small" sx={{ color: "white" }} />
          <span>NYC Store</span>
          <KeyboardArrowDownOutlinedIcon sx={{ color: "white" }} />
        </div>
        <div className="help">
          <InfoOutlinedIcon sx={{ color: "white" }} style={{ fontSize: 14 }}/>
          <span>Help</span>
          <KeyboardArrowDownOutlinedIcon sx={{ color: "white" }} />
        </div>
      </div>
    </div>
  );
};

export default NavHelp;
