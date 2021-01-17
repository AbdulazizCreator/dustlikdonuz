import { FiSearch } from "react-icons/fi";
import { BiMenu, BiPhone } from "react-icons/bi";
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux'
import { toggle, toggle2 } from "../../actions";
import Slider from "react-slick";
import "./Header.scss";
const Header = () => {
  var settings = {
    dots: true,
  };
  const open = useSelector(state => state.open);
  const open2 = useSelector((state) => state.open2);

  console.log(open);
  const dispatch = useDispatch();
  return (
    <section id="navbar" className="p-relative">
      <div className="topHeader container-lg d-flex justify-content-between align-items-center px-lg-0">
        <div className="logo d-none d-lg-block">
          <a href="/">Dustlikdon.uz</a>
        </div>
        <div className="logo d-block d-lg-none" onClick={() => dispatch(toggle())}>
          <BiMenu />
        </div>
        <div className="search flex-grow-1 pl-5">
          <form action="">
            <i className="fa fa-search p-absolute">
              <FiSearch />
            </i>
            <input type="text" placeholder="search" className="w-100" />
          </form>
        </div>
        <div className="language d-none d-lg-block">
          <span>RUS LANGUAGE</span>
        </div>
        <div className="phone d-none d-lg-block">
          <span>
            <i>
              <BiPhone />
            </i>
            99872 335-41-16
          </span>
        </div>
      </div>
      <div className="header">
        <nav
          className={
            "container-lg navbar px-0 navbar-expand-sm d-lg-flex d-none p-absolute p-lg-relative " +
            (open ? "d-flex" : "d-none")
          }
        >
          <a href="/" className="navbar-brand d-none d-lg-block">
            <img src="images/Rectangle 6.png" alt="" />
          </a>
          <ul className="navbar-nav d-flex flex-lg-row flex-column vh-lg-100">
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
              <button className="nav-link" onClick={() => dispatch(toggle2())}>
                Yangiliklar
                <div className={"newsMenuCategories " + (open2 ? 'd-block' : 'd-none')}>
                  <div>
                    <a href="/">Lorem, ipsum.</a>
                  </div>
                  <div>
                    <a href="/">Reprehenderit, doloremque!</a>
                  </div>
                  <div>
                    <a href="/">Aliquid, autem.</a>
                  </div>
                </div>
              </button>
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
      </div>
      <div className="carouselSlider">
        <Slider {...settings}>
          <div className="imgBox">
            <img src="images/Rectangle 4.png" alt="" />
            <div className="innerBox">
              <img src="images/image 8.png" alt="" />
              <h3>
                O`ZBEKISTON RESPUBLIKASI "O`ZDONMAXSULOT" AKSIYADORLIK
                KOMPANIYASI "DO`STLIKDONMAXSULOTLARI" AKSIYADORLIK JAMIYATI
              </h3>
            </div>
          </div>
          <div className="imgBox">
            <img src="images/Rectangle 4.png" alt="" />
            <div className="innerBox">
              <img src="images/image 8.png" alt="" />
              <h3>
                O`ZBEKISTON RESPUBLIKASI "O`ZDONMAXSULOT" AKSIYADORLIK
                KOMPANIYASI "DO`STLIKDONMAXSULOTLARI" AKSIYADORLIK JAMIYATI
              </h3>
            </div>
          </div>
          <div className="imgBox">
            <img src="images/Rectangle 4.png" alt="" />
            <div className="innerBox">
              <img src="images/image 8.png" alt="" />
              <h3>
                O`ZBEKISTON RESPUBLIKASI "O`ZDONMAXSULOT" AKSIYADORLIK
                KOMPANIYASI "DO`STLIKDONMAXSULOTLARI" AKSIYADORLIK JAMIYATI
              </h3>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Header;
