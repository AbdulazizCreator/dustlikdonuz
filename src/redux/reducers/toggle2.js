export const toggle2 = (state = false, action) => {
  switch (action.type) {
    case "toggle2":
      return !state;
    default:
      return state;
  }
};
