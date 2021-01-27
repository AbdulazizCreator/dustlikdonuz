import axios from "axios";
import { toast } from "react-toastify";
import { API_PATH, TOKEN_PATH } from "../../tools/constants";
import { LOGIN } from "../actionTypes/authType";

export const loginUser = (data, history) => {
  return function(dispatch) {
    dispatch({
      type: LOGIN,
    });
    axios
      .post(API_PATH + "auth/login", data)
      .then((res) => {
        console.log(res);
        localStorage.setItem(
          TOKEN_PATH,
          res.data.tokenType + " " + res.data.accessToken
        );
        dispatch({ type: LOGIN });
        history.push("/admin");
      })
      .catch((err) => {
        toast.error("Xatolik");
        dispatch({ type: LOGIN });
      });
  };
};
