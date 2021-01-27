import { FiSearch } from "react-icons/fi";
import { BiMenu, BiPhone } from "react-icons/bi";
import { connect, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggle } from "../../redux/actions";
import { getMenus } from "../../redux/actions/adminMenuAction";

import "./Header.scss";
import { useEffect } from "react";
const Header = (props) => {
  const open = useSelector((state) => state.open);

  useEffect(() => {
    props.getMenus();
  }, [props]);

  const dispatch = useDispatch();
  return (
    <section id="navbar" className="p-relative">
      <div className="topHeader container-lg d-flex justify-content-between align-items-center px-lg-0">
        <div className="logo d-none d-lg-block">
          <a href="/">Dustlikdon.uz</a>
        </div>
        <div
          className="logo d-block d-lg-none"
          onClick={() => dispatch(toggle())}
        >
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
            {props.menus.map((item) => (
              <li className="nav-item">
                <a href="/" className="nav-link">
                  {item.nameUz}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    menus: state.menu.menus,
  };
};

export default connect(mapStateToProps, { getMenus })(Header);
