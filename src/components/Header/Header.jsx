import React from "react";
import "./Header.css";
import medika from "../../assets/img/medic.png"

const Header = () => {
  return (
    <div className="header">
        <div className="header__titles">
        <h2 className="header__title">Welcome</h2>
        <p className="header__para">A Great Place to <br /> Receive Care</p>
        <span className="header__span">Get your best looking smile now!</span><br />
        <button className="header__button">Join Us</button>
        <button  className="header__btn">Learn More</button>
        </div>
       <div className="container">
          <img className="header__img" src={medika} alt="png"/>
       </div>
    </div>
  );
};
export default Header;
