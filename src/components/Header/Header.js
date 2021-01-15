import React from "react";
import {FiSearch} from 'react-icons/fi'
import {BiPhone} from 'react-icons/bi'
import Slider from "react-slick";
import './Header.scss';
const Header = () => {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    };

  return (
    <section id="navbar" className="">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo">
          <a href="/">Dustlikdon.uz</a>
        </div>
        <div className="search flex-grow-1 px-5">
          <form action="">
            <i className="fa fa-search p-absolute">
              <FiSearch />
            </i>
            <input type="text" placeholder="search" />
          </form>
        </div>
        <div className="language">
          <span>RUS LANGUAGE</span>
        </div>
        <div className="phone">
          <span>
            <i>
              <BiPhone />
            </i>
            99872 335-41-16
          </span>
        </div>
      </div>
      <nav className="container navbar px-0 navbar-expand-sm">
        <a href="/" className="navbar-brand">
          <img src="images/Rectangle 6.png" alt="" />
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Jamiyat haqida
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Struktura
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Yangiliklar
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Elektron murojaatlar
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Interaktiv xizmatlar
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Aloqa
            </a>
          </li>
        </ul>
      </nav>
      <Slider {...settings}>
        <div>
          <img src="images/Rectangle 4.png" alt="" />
        </div>
        <div>
          <img src="images/Rectangle 4.png" alt="" />
        </div>
        <div>
          <img src="images/Rectangle 4.png" alt="" />
        </div>
      </Slider>
    </section>
  );
};

export default Header;
