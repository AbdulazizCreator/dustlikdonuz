import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import AdminLayout from "../AdminLayout/AdminLayout";
import {
  updateState,
  addMenu,
  getMenus,
  deleteMenu,
  getAllMenus
} from "../../../redux/actions/adminMenuAction";
import { AvField, AvForm } from "availity-reactstrap-validation";

const AdminMenu = (props) => {
  const changeModal = () => {
    props.updateState({ modalOpen: !props.modalOpen });
  };

  const changeDeleteModal = () => {
    props.updateState({ deleteModalOpen: !props.deleteModalOpen });
  };
  const generateUrl = (text) =>
    text
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");

  const saveMenu = (event, values) => {
    props.addMenu(values);
  };

  useEffect(() => {
    props.getAllMenus();
  }, [props]);

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
            {props.menus.map((item, index) => (
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
                      props.updateState({ selectedMenu: item });
                      changeModal();
                    }}
                  >
                    E
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      props.updateState({ selectedIdForDelete: item.id });
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

        <Modal isOpen={props.modalOpen} toggle={changeModal}>
          <AvForm onValidSubmit={saveMenu} model={props.selectedMenu}>
            <ModalBody>
              {props.selectedMenu.id ? (
                <AvField
                  name="id"
                  value={props.selectedMenu.id}
                  className="d-none"
                />
              ) : (
                ""
              )}
              <AvField
                onChange={(e) =>
                  props.updateState({
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
                value={props.isSubMenu}
                onChange={() =>
                  props.updateState({ isSubMenu: !props.isSubMenu })
                }
              />
              {props.isSubMenu ? (
                <React.Fragment>
                  <AvField name="parentId" type="select" label="Parent menu">
                    {props.menus.map(item => (
                      <option value={item.id}>{item.nameUz}</option>
                    ))}
                  </AvField>
                  <AvField
                    name="url"
                    type="text"
                    label="Url"
                    value={props.generatedUrl}
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

        <Modal isOpen={props.deleteModalOpen} toggle={changeDeleteModal}>
          <ModalBody>
            <h5>Rostan ham o'chirmoqchisiz ?</h5>
          </ModalBody>
          <ModalFooter>
            <button
              className="btn btn-danger"
              type="button"
              onClick={() => props.deleteMenu(props.selectedIdForDelete)}
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
};

const mapStateToProps = (state) => {
  return {
    modalOpen: state.menu.modalOpen,
    isSubMenu: state.menu.isSubMenu,
    generatedUrl: state.menu.generatedUrl,
    deleteModalOpen: state.menu.deleteModalOpen,
    menus: state.menu.menus,
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
