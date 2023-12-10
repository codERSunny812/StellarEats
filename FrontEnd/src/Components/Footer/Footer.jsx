import React from "react";
import "./footer.css";
import Logo from "../../assets/Logo.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="mainFooter">
        <div className="part1">
          <img src={Logo} alt="Website logo" />
          <h5>©2023 Design and created by sunny</h5>
        </div>

        <div className="part2 footerHeading">
          <h3>company</h3>
          <ul className="footerList">
            <li>about</li>
            <li>careers</li>
            <li>team</li>
            <li>swiggy one</li>
            <li>swiggy instamart</li>
            <li>swiggy ginner</li>
          </ul>
        </div>

        <div className="part3 footerHeading">
          <h3>contact us </h3>
          <ul className="footerList">
            <li>terms & conditions</li>
            <li>cookie policy</li>
            <li>privacy </li>
          </ul>
        </div>

        <div className="part4 footerHeading">
          <h3>we deliver to:</h3>
          <ul className="footerList">
            <li>banglore</li>
            <li>gurgaon</li>
            <li>delhi</li>
            <li>lucknow</li>
            <li>mumbai</li>
            <li>pune</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
