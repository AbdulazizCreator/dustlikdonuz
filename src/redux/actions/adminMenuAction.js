import axios from "axios";
import { toast } from "react-toastify";
import { API_PATH } from "../../tools/constants";
import { UPDATE_STATE } from "../actionTypes/adminNewsActionTypes";

export function updateState(data) {
  return {
    type: UPDATE_STATE,
    payload: data,
  };
}

export function addMenu(data) {
  return function (dispatch) {
    axios.post(API_PATH + "menu/all", data).then((res) => {
      if (res.data.success) {
        toast.success(res.data.message);
        dispatch(getAllMenus());
        dispatch({
          type: UPDATE_STATE,
          payload: { modalOpen: false, selectedMenu: [] },
        });
      } else {
        toast.error(res.data.message);
      }
    });
  };
}

export function getMenus() {
  return function (dispatch) {
    axios.get(API_PATH + "menu").then((res) => {
      dispatch(updateState({ menus: res.data.data }));
    });
  };
}

export function getAllMenus() {
  return function (dispatch) {
    axios.get(API_PATH + "menu/all").then((res) => {
      dispatch(updateState({ menus: res.data.data }));
    });
  };
}

export function deleteMenu(id) {
  return function (dispatch) {
    axios.delete(API_PATH + "menu/" + id).then((res) => {
      if (res.data.success) {
        toast.success(res.data.message);
        dispatch(getMenus());
        dispatch({ type: UPDATE_STATE, payload: { deleteModalOpen: false } });
      } else {
        toast.error("Xatolik");
      }
    });
  };
}
