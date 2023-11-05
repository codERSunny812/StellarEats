import React from 'react'
import './header.scss'
import './header.css'
import { BsSearch } from 'react-icons/bs';
import { BiSolidOffer } from 'react-icons/bi'
import { IoHelpBuoyOutline } from "react-icons/io5";
import { BiUserCircle } from 'react-icons/bi'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Logo = () => {
    return <img src="https://i.pinimg.com/474x/05/64/db/0564db618b8e778534e882cfda48dd2f.jpg" alt="logo" className='logo_image' />
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