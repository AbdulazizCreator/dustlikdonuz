import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import AdminLayout from "../AdminLayout/AdminLayout";
import {
  updateState,
  addMenu,
  getMenus,
  getAllMenus,
  deleteMenu,
} from "../../../redux/actions/adminMenuAction";
import { AvField, AvForm } from "availity-reactstrap-validation";

class AdminMenu extends Component {
  componentDidMount() {
    this.props.getAllMenus();
    this.props.getMenus();
  }

  render() {
    const changeModal = () => {
      this.props.updateState({ modalOpen: !this.props.modalOpen });
    };

    const changeDeleteModal = () => {
      this.props.updateState({ deleteModalOpen: !this.props.deleteModalOpen });
    };
    const generateUrl = (text) =>
      text
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");

    const saveMenu = (event, values) => {
      this.props.addMenu(values);
    };
    return (
      <AdminLayout>
        <div className="admin-news">
          <div className="d-flex justify-content-between">
            <div>
              <h3>Menus</h3>
            </div>
            <div>
              <Button color="success" onClick={changeModal}>
                Qo'shish
              </Button>
            </div>
          </div>

          <table className="table table-striped table-hover mt-3">
            <thead>
              <tr>
                <th></th>
                <th>Name(uz)</th>
                <th>Name(ru)</th>
                <th>Name(ru)</th>
                <th>Parent Menu</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.allMenus.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.nameUz}</td>
                  <td>{item.nameRu}</td>
                  <td>{item.nameEn}</td>
                  <td>{item.parentMenuName}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary mr-2"
                      onClick={() => {
                        this.props.updateState({ selectedMenu: item });
                        changeModal();
                      }}
                    >
                      E
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        this.props.updateState({
                          selectedIdForDelete: item.id,
                        });
                        changeDeleteModal();
                      }}
                    >
                      D
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Modal isOpen={this.props.modalOpen} toggle={changeModal}>
            <AvForm onValidSubmit={saveMenu} model={this.props.selectedMenu}>
              <ModalBody>
                {this.props.selectedMenu.id ? (
                  <AvField
                    name="id"
                    value={this.props.selectedMenu.id}
                    className="d-none"
                  />
                ) : (
                  ""
                )}
                <AvField
                  onChange={(e) =>
                    this.props.updateState({
                      generatedUrl: generateUrl(e.target.value),
                    })
                  }
                  name="nameUz"
                  type="text"
                  label="Uzbek (uz)"
                  required
                />
                <AvField
                  name="nameEn"
                  type="text"
                  label="Engliz (Eng)"
                  required
                />
                <AvField name="nameRu" type="text" label="Rus (Ru)" required />
                <AvField
                  name="submenu"
                  type="checkbox"
                  label="This is submenu "
                  value={this.props.isSubMenu}
                  onChange={() =>
                    this.props.updateState({ isSubMenu: !this.props.isSubMenu })
                  }
                />
                {this.props.isSubMenu ? (
                  <React.Fragment>
                    <AvField name="parentId" type="select" label="Parent menu">
                      {this.props.menus.map((item) => (
                        <option value={item.id}>{item.nameUz}</option>
                      ))}
                    </AvField>
                    <AvField
                      name="url"
                      type="text"
                      label="Url"
                      value={this.props.generatedUrl}
                    />
                  </React.Fragment>
                ) : (
                  ""
                )}
              </ModalBody>
              <ModalFooter>
                <Button type="submit" color="success">
                  Save
                </Button>
                <Button type="button" onClick={changeModal}>
                  Close
                </Button>
              </ModalFooter>
            </AvForm>
          </Modal>

          <Modal isOpen={this.props.deleteModalOpen} toggle={changeDeleteModal}>
            <ModalBody>
              <h5>Rostan ham o'chirmoqchisiz ?</h5>
            </ModalBody>
            <ModalFooter>
              <button
                className="btn btn-danger"
                type="button"
                onClick={() =>
                  this.props.deleteMenu(this.props.selectedIdForDelete)
                }
              >
                Ha
              </button>
              <button
                className="btn btn-primary"
                type="button"
                onClick={changeDeleteModal}
              >
                Yo'q
              </button>
            </ModalFooter>
          </Modal>
        </div>
      </AdminLayout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    modalOpen: state.menu.modalOpen,
    isSubMenu: state.menu.isSubMenu,
    generatedUrl: state.menu.generatedUrl,
    deleteModalOpen: state.menu.deleteModalOpen,
    menus: state.menu.menus,
    allMenus: state.menu.allMenus,
    selectedMenu: state.menu.selectedMenu,
    selectedIdForDelete: state.menu.selectedIdForDelete,
  };
};

export default connect(mapStateToProps, {
  updateState,
  addMenu,
  getMenus,
  getAllMenus,
  deleteMenu,
})(AdminMenu);
