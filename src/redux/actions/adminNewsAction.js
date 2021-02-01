import axios from "axios";
import { toast } from "react-toastify";
import { API_PATH } from "../../tools/constants";

export function updateState(data) {
  return {
    type: "UPDATE_STATE",
    payload: data,
  };
}

export function saveFile(data) {
  let image = new FormData();
  image.append("image", data);
  return function (dispatch) {
    axios.post(API_PATH + "file/save", image).then((res) => {
      if (res.status === 200) {
        dispatch(updateState({ selectedImage: res.data.id }));
      } else {
        toast.error("Xatolik");
      }
    });
  };
}

export function addNews(data) {
  return function (dispatch) {
    axios.post(API_PATH + "news", data).then((res) => {
      if (res.data.success) {
        toast.success(res.data.message);
        dispatch(getNews());
        dispatch(updateState({ modalOpen: false }));
        dispatch(updateState({ selectedImage: "" }));
      } else {
        toast.error(res.data.message);
      }
    });
  };
}

export function getNews() {
  return function (dispatch) {
    axios
      .get(API_PATH + "news")
      .then((res) => dispatch(updateState({ news: res.data.data })));
  };
}

export function deleteNews(id) {
  return function (dispatch) {
    axios.delete(API_PATH + "news/" + id).then((res) => {
      if (res.data.success) {
        toast.success(res.data.message);
        //   dispatch(updateState({deleteModalOpen: false}))
        dispatch(getNews());
      } else {
        toast.error(res.data.message);
      }
    });
  };
}

export function getNewsByMenu(url) {
  return function (dispatch) {
    axios.get(API_PATH + "news/byMenu/" + url).then((res) => {
      dispatch(updateState({ newsByMenu: res.data.data }));
    });
  };
}
