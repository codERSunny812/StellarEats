import React, { useState } from "react";
import "./header.css";
import { BsSearch } from "react-icons/bs";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link href="/">
      <img
        src="https://png.pngtree.com/png-vector/20220708/ourmid/pngtree-fast-food-logo-png-image_5763171.png"
        alt="logo"
        className="logo_image"
      />
    </Link>
  );
};

const Header = () => {
  return (
    <>
      <div className="header">
        <Logo className="header_image" />
        <ul>
          <li>
            <BsSearch />
            <span>search</span>
          </li>
          <li>
            <BiSolidOffer /> <span>offer</span>
          </li>
          <Link to="/help" className="link">
            <li>
              <IoHelpBuoyOutline />
              <span>help</span>
            </li>{" "}
          </Link>
          <Link to="/status" className="link">
            <li>
              <BiUserCircle />
              <span>sign in</span>
            </li>
          </Link>
          <Link to="/cart" className="link">
            <li>
              <AiOutlineShoppingCart />
              <span>cart</span>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Header;
