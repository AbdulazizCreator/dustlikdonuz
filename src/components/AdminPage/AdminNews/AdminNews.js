import { AvForm } from "availity-reactstrap-validation";
import AvField from "availity-reactstrap-validation/lib/AvField";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import {
  addNews,
  getNews,
  saveFile,
  updateState,
} from "../../../redux/actions/adminNewsAction";
import { API_PATH } from "../../../tools/constants";
import AdminLayout from "../AdminLayout/AdminLayout";
import { getSubMenus } from "../../../redux/actions/adminMenuAction";
import { deleteNews } from "../../../redux/actions/adminNewsAction";
const AdminNews = (props) => {
  const changeModal = () => {
    props.updateState({ modalOpen: !props.modalOpen });
  };

  useEffect(() => {
    props.getSubMenus();
    props.getNews();
  }, [props]);

  const savePhoto = (e) => {
    props.saveFile(e.target.files[0]);
  };

  const saveNews = (event, values) => {
    props.addNews({ ...values, photo: props.selectedImage });
  };
  const generateUrl = (text) =>
    text
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");

  const changeUrl = (e) => {
    props.updateState({ generatedUrl: generateUrl(e.target.value) });
  };

  const editNews = (data) => {
    props.updateState({
      selectedNews: data,
      modalOpen: true,
      selectedImage: data.photo.id,
    });
  };

  const changeDeleteModal = () => {
    props.updateState({
      deleteModalOpen: !props.deleteModalOpen,
    });
  };

  return (
    <AdminLayout>
      <div className="admin-news">
        <div className="d-flex justify-content-between">
          <div>
            <h3>News</h3>
          </div>
          <div>
            <Button color="success" onClick={changeModal}>
              Qo'shish
            </Button>
          </div>
        </div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Title (uz)</th>
              <th>Desc</th>
              <th>Url</th>
              <th>Menu</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {props.news.map((item) => (
              <tr key={item.id}>
                <td>{item.titleUz}</td>
                <td>{item.descriptionUz}</td>
                <td>{item.url}</td>
                <td>{item.menu.nameUz}</td>
                <td>
                  <button
                    type="submit"
                    className="btn btn-success mr-3"
                    onClick={() => editNews(item)}
                  >
                    E
                  </button>
                  <button
                    type="submit"
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
        <Modal
          isOpen={props.modalOpen}
          toggle={() => {
            props.updateState({ selectedImage: "" });
            changeModal();
          }}
        >
          <AvForm onValidSubmit={saveNews} model={props.selectedNews}>
            <ModalBody>
              {props.selectedNews.id ? (
                <AvField
                  name="id"
                  value={props.selectedNews.id}
                  className="d-none"
                />
              ) : (
                ""
              )}
              <AvField
                onChange={changeUrl}
                name="titleUz"
                type="text"
                label="News title (Uz)"
              />
              <AvField name="titleRu" type="text" label="News title (Ru)" />
              <AvField name="titleEn" type="text" label="News title (En)" />
              <AvField
                name="descriptionUz"
                type="textarea"
                label="Description(Uz)"
                required
              />
              <AvField
                name="descriptionRu"
                type="textarea"
                label="Description(Ru)"
              />
              <AvField
                name="descriptionEn"
                type="textarea"
                label="Description(En)"
              />
              <AvField type="select" name="menu" label="Menu">
                {props.subMenus.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.nameUz}
                  </option>
                ))}
              </AvField>
              <AvField name="url" label="Url" value={props.generatedUrl} />
              <label htmlFor="file">Rasm</label>
              <input
                onChange={savePhoto}
                type="file"
                className="form-control"
              />
              {props.selectedImage ? (
                <div className="p-relative">
                  <img
                    src={API_PATH + "file/get/" + props.selectedImage}
                    className="w-100 mt-3"
                    alt=""
                  />
                  <button
                    type="button"
                    className="btn close"
                    onClick={() => props.updateState({ selectedImage: "" })}
                  >
                    &times;
                  </button>
                </div>
              ) : (
                ""
              )}
            </ModalBody>
            <ModalFooter>
              <button type="submit" className="btn btn-success">
                Save
              </button>
              <button
                type="submit"
                className="btn btn-danger"
                onClick={() => {
                  props.updateState({ selectedImage: "" });
                  changeModal();
                }}
              >
                Cancel
              </button>
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
              onClick={() => {
                props.deleteNews(props.selectedIdForDelete);
                changeDeleteModal();
              }}
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
    modalOpen: state.news.modalOpen,
    selectedImage: state.news.selectedImage,
    generatedUrl: state.news.generatedUrl,
    subMenus: state.news.subMenus,
    news: state.news.news,
    selectedNews: state.news.selectedNews,
    deleteModalOpen: state.news.deleteModalOpen,
    selectedIdForDelete: state.news.selectedIdForDelete,
  };
};

export default connect(mapStateToProps, {
  updateState,
  saveFile,
  getSubMenus,
  addNews,
  getNews,
  deleteNews,
})(AdminNews);
