import React, { useContext } from "react";
import "./header.css";
import { BsSearch } from "react-icons/bs";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { SearchContext } from "../Context/SearchContext";
import store from "../../util/store";
import { Badge } from "@mui/material";


const Logo = () => {
  return (
    <Link to="/">
      <img
        src="https://png.pngtree.com/png-vector/20220708/ourmid/pngtree-fast-food-logo-png-image_5763171.png"
        alt="logo"
        className="logo_image"
      />
    </Link>
  );
};

const Header = () => {
  

const SearchCont = useContext(SearchContext);

  const CartItems = useSelector((store) => store.cart.items)

  const SearchToggleFun = () =>{
    
    SearchCont.isSearchVisible
      ? SearchCont.setIsSearchVisible(false)
      : SearchCont.setIsSearchVisible(true);
  }

  return (
    <>
      <div className="header">
        <Logo className="header_image" />
        <ul>
          <li onClick={SearchToggleFun}>
            <BsSearch />
            <span>search</span>
          </li>
          <Link to="/offer" className="link">
            <li>
              <BiSolidOffer />
              <span>offer</span>
            </li>
          </Link>
          <Link to="/help" className="link">
            <li>
              <IoHelpBuoyOutline />
              <span>help</span>
            </li>
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
              <span>cart<sup className="countOfItems">{CartItems.length}</sup> </span>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Header;
