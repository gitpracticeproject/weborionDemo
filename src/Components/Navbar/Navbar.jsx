import React from "react";
import "./Navbar.css";
// import { searchIcon } from "../../Images/search_bar_icon.svg";
import downCaret from "../../Images/nav_caret_down.svg";
import navBell from "../../Images/nav_bell.svg";
import userIcon from "../../Images/nav_user_img.png";

const Navbar = () => {
  return (
    <>
      <header className="rounded-b-3xl py-5 sticky float-right">
        <div className="flex justify-between items-center pl-4 pr-7">
          <form>
            <input
              type="text"
              placeholder="Search for lorem ipsum..."
              className="rounded-lg relative font-normal text-sm"
            />
          </form>
          <span className="font-normal text-sm text-gray-600 font-inter px-5">
            The Web Security Stack for Next-gen Companies
          </span>
          <div className="user-block flex items-center">
            <img src={navBell} alt="notification-bell" className="pr-3" />
            <div className="flex items-center">
              <img src={userIcon} alt="user" />
              <span className="text-black font-semibold font-roboto">
                Hello, <br />
                Jennifer
              </span>
              <img src={downCaret} alt="" className="w-3 h-1.5" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
