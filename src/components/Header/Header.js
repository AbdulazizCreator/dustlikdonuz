
import { connect } from "react-redux";
import { getMenus } from "../../redux/actions/adminMenuAction";
import { Component } from "react";
import { toggle } from "../../redux/actions/index";

import "./Header.scss";
import { Link } from "react-router-dom";
class Header extends Component {
  componentDidMount() {
    this.props.getMenus();
  }

  render() {
    return (
      <section id="navbar" className="p-relative">
        <div className="topHeader container-lg d-flex justify-content-between align-items-center px-lg-0">
          <div className="logo d-none d-lg-block">
            <a href="/">Dustlikdon.uz</a>
          </div>
          <div
            className="logo d-block d-lg-none"
            style={{ cursor: "pointer" }}
            onClick={this.props.toggle}
          >
            <img src="/images/align-center.svg" alt=""/>
          </div>
          <div className="search flex-grow-1">
            <form action="">
              <img src="/images/search.svg" alt="" />

              <input type="text" placeholder="Saytdan izlash" />
            </form>
          </div>
          <div className="language d-none d-lg-block">
            <select>
              <option value="english">English</option>
              <option value="russian">Русский</option>
              <option value="uzbek">O'zbekcha</option>
            </select>
          </div>
          <div className="phone d-none d-lg-flex">
            <img src="/images/phone.svg" alt="" />
            <span>99872 335-41-16</span>
          </div>
        </div>
        <div className="header">
          <nav
            className={
              "container-lg navbar px-0 navbar-expand-sm d-lg-flex p-absolute p-lg-relative " +
              (this.props.open ? "d-flex" : "d-none")
            }
          >
            <a href="/" className="navbar-brand d-none d-lg-block">
              <img src="/images/Rectangle 6.png" alt="" />
              <img src="/images/vector.svg" className="innerImg" alt="" />
            </a>
            <ul className="navbar-nav d-flex flex-lg-row flex-column vh-lg-100">
              {this.props.menus.map((item) => (
                <li className="p-relative nav-item" key={item.id}>
                  <div className="nav-link">{item.nameUz}</div>
                  {item.submenus.length > 0 ? (
                    <div className="subMenus">
                      <table className="table table-striped">
                        {item.submenus.map((item2) => (
                          <tr>
                            <td>
                              <Link to={"/category/" + item2.url}>
                                {item2.nameUz}
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </table>
                    </div>
                  ) : (
                    ""
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    menus: state.menu.menus,
    open: state.open,
  };
};

export default connect(mapStateToProps, { getMenus, toggle })(Header);
