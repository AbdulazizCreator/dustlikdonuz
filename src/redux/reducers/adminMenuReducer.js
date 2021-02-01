import { UPDATE_STATE } from "../actionTypes/adminNewsActionTypes";

const initialState = {
  modalOpen: false,
  isSubMenu: false,
  generatedUrl: '',
  deleteModalOpen: false,
  selectedIdForDelete: null,
  selectedMenu: {},
  menus: [],
  allMenus: [],
};

export const adminMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
