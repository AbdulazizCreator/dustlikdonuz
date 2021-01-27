import React, { useState } from "react";
import "./adminLayout.scss";
import { Link } from "react-router-dom";
import { TOKEN_PATH } from "../../../tools/constants";
import { Modal, ModalBody, ModalFooter } from "reactstrap";
const AdminLayout = (props) => {
  const [open, setOpen] = useState(false);

  const changeModal = () => {
    setOpen({ open: !open });
  };

  return (
    <div className="admin-layout">
      <div className="admin-navbar"></div>
      <div className="admin-content d-flex">
        <div className="admin-content-left">
          <div className="d-flex align-items-center">
            <div className="user-img">
              <span className="icon icon-user"></span>
            </div>
            <div>
              <h5 className="mb-0">Abdulaziz Programmer</h5>
              <p className="mb-0">Administrator</p>
            </div>
          </div>
          <ul className="nav mt-4 flex-column">
            <li className="nav-item">
              <Link to="/admin/news" className="nav-link text-white">
                Yangiliklar
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/menu" className="nav-link text-white">
                Menyular
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin" className="nav-link text-white">
                Laudantium?
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin" className="nav-link text-white">
                Corrupti!
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin" className="nav-link text-white">
                Atque?
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin" className="nav-link text-white">
                Molestiae!
              </Link>
            </li>
            <li className="nav-item mt-4">
              <Link onClick={changeModal} className="nav-link text-white">
                Chiqish
              </Link>
            </li>
          </ul>
          <Modal isOpen={open} toggle={changeModal}>
            <ModalBody>Rostan ham chiqmoqchimisiz ?</ModalBody>
            <ModalFooter>
              <Link
                className="btn btn-danger"
                type="button"
                onClick={() => localStorage.removeItem(TOKEN_PATH)}
                to='/'
              >
                Ha
              </Link>
              <button className="btn btn-primary" type="button">
                Yo'q
              </button>
            </ModalFooter>
          </Modal>
        </div>
        <div className="admin-content-right">{props.children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
