import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({ isAuth }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header-wrapper">
      <header>
        <Link to={"/"}><div className="logo"><img src="/assets/logo.png" width={"120px"}></img></div></Link>
        <div className="link">
          <Link to={"/"}>Home</Link>
          <Link to={"/courses"}>Courses</Link>
          <Link to={"/about"}>About</Link>
          {isAuth ? (
            <Link to={"/account"}>Account</Link>
          ) : (
            <>
              <Link to={"/account"} className='auth-button'>Login</Link>
              <Link to={"/register"} className='auth-button'>Register</Link>
            </>
          )}
        </div>
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <GiHamburgerMenu style={{fontSize: "30px", color: "white"}} />
        </div>
      </header>
      {isMenuOpen && (
        <div className="mobile-menu-wrapper">
          <div className="mobile-menu">
            <Link to={"/"} onClick={toggleMenu}>Home</Link>
            <Link to={"/courses"} onClick={toggleMenu}>Courses</Link>
            <Link to={"/about"} onClick={toggleMenu}>About</Link>
            {isAuth ? (
              <Link to={"/account"} onClick={toggleMenu}>Account</Link>
            ) : (
              <>
                <Link to={"/login"} className='auth-button' onClick={toggleMenu}>Login</Link>
                <Link to={"/register"} className='auth-button'>Register</Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;