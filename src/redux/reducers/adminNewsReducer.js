import { UPDATE_STATE } from "../actionTypes/adminNewsActionTypes";

const initialState = {
  modalOpen: false,
};

export const adminNewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
