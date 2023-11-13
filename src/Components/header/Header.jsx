import React from 'react'
import './header.scss'
import './header.css'
import { BsSearch } from 'react-icons/bs';
import { BiSolidOffer } from 'react-icons/bi'
import { IoHelpBuoyOutline } from "react-icons/io5";
import { BiUserCircle } from 'react-icons/bi'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Logo = () => {
  return ( 
  <a href="/" target="_blank" rel="noopener noreferrer">
      <img src="https://png.pngtree.com/png-vector/20220708/ourmid/pngtree-fast-food-logo-png-image_5763171.png" alt="logo" className='logo_image' />
  </a>
  
  )
}

const Header = () => {
  return (
    <>
    <div className="header">
    <Logo className="header_image"/>
    <ul>
          <li> <BsSearch /> <span>search</span>   </li>
        <li><BiSolidOffer /> <span>offer</span></li>
          <li><IoHelpBuoyOutline /><span>help</span></li>
          <li><BiUserCircle /><span>sign in</span></li>
          <li><AiOutlineShoppingCart /><span>cart</span></li>
    </ul>
    </div>
    </>
    
  )
}

export default Header