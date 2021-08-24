import react from "react";

const user = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).user
  : "";

const token = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).auth_token
  : "";

export const initailState = {
  user: "",
  // userDetails: "" || user,
  token: "" || token,
  loading: false,
  errorMessage: null,
  registerMessage: null,
  is_authenticated: false,
  signOnSuccess: false,
};

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      console.log("THis is request login");
      return {
        ...initialState,
        loading: true,
        signOnSuccess: false,
        errorMessage: null,
      };
    case "LOGIN_SUCCESS":
      console.log("coming from login Success,", action.payload.user.username);

      return {
        ...initialState,
        token: action.payload.token,
        loading: false,
        is_authenticated: true,
        user: action.payload.user.username,
      };
    case "LOGOUT":
      return {
        ...initialState,
        user: "",
        token: "",
        is_authenticated: false,
      };

    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };

    case "REQUEST_REGISTER":
      console.log("request register");
      return {
        ...initialState,
        loading: true,
        registerMessage: null,
      };
    case "REGISTER_ERROR":
      console.log("register error");
      return {
        ...initialState,
        loading: false,
        registerMessage: action.error,
      };

    case "REGISTER_SUCCESS":
      return {
        ...initialState,
        loading: false,
        signOnSuccess: true,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
