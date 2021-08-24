import axios from "axios";
import { getAuth, getuser } from "../../../constants";

// const ROOT_URL = "https://boozercartcore.azurewebsites.net";

export async function loginUser(dispatch, loginPayload, history) {
  console.log("Sign on Action called()");
  try {
    dispatch({ type: "REQUEST_LOGIN" });
    axios
      .post(getAuth, loginPayload)
      .then((response) => {
        console.log("Endpoint hit ");
        if (response.data.token) {
          dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", response.data.user.username);
          history.push("/dashboard");
        }
      })
      .catch((error) => {
        console.log("There is error in endpoit", error);
        dispatch({ type: "LOGIN_ERROR", error: error });
      });
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", error: error });
  }
}

export async function registerUser(dispatch, loginPayload, history) {
  try {
    dispatch({ type: "REQUEST_REGISTER" });
    axios
      .post(getuser, loginPayload)
      .then((response) => {
        console.log("User created");
        console.log(response.data.token);
        history.push("/sign-in");
        dispatch({ type: "REGISTER_SUCCESS" });
      })
      .catch((error) => {
        console.log("This is register error", error);
        dispatch({ type: "REGISTER_ERROR", error: error });
      });
  } catch (error) {
    console.log("this is from catch", error);
    dispatch({ type: "REGISTER_ERROR", error: error });
  }
}

export async function logout(dispatch) {
  dispatch({ type: "LOGOUT" });
  localStorage.removeItem("user");
  localStorage.removeItem("token");
}

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
