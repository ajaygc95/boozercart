import React, { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router";

import { loginUser, socialLogin } from "../../Context/Action/Action";
import { useAuthDispatch, useAuthState } from "../../Context/AuthContext";
import LandingPage from "../../LandingPage/LandingPage";
import {
  faFacebook,
  faGoogle,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import { FaExclamationCircle } from "react-icons/fa";
import validateLoginInfo from "../AccountUtils/ValidateLoginInfo";
import { Message } from "semantic-ui-react";

import {
  LoginBox,
  LoginContainer,
  LoginHeader,
  LoginWrapper,
  LoginButton,
  LoginForm,
  LoginFormInput,
  FontAwesomeStyle,
  SocialLabel,
  IconStyle1,
  IconStyle2,
  IconStyle3,
  SignUpDetail,
  DetailGrid,
  Last,
  FormName,
  FormField,
  Topq,
  YesAccount,
  SocialDiv,
  NavLinksTopQ,
  ErrorsSignUp,
  GoogleButton,
  FontAwesomeStyleGoogle,
  FacebookButton,
  FontAwesomeStyleFacebook,
} from "./Login.element";
import axios from "axios";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { googlLogin } from "../../../constants";

function Login(props) {
  const token = localStorage.getItem("token");
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const [message, setMessage] = useState({
    loading: false,
    error: null,
    success: false,
    googleError: null,
  });

  const dispatch = useAuthDispatch(); //get the dispatch method from the useDispatch custom hook
  const { loading, errorMessage, signOnSuccess, is_authenticated } =
    useAuthState(); //read the values of loading and errorMessage from context
  const [errors, setErros] = useState({});
  console.log("This is signon success", signOnSuccess);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErros(validateLoginInfo(values));

    if (Object.keys(errors).length === 0) {
      console.log("Login From login page has been called()");
      loginUser(dispatch, values, props.history);
    } else {
      console.log("else called");
      console.log(loading);
    }
  };

  const responseGoogle = (response) => {
    console.log(response);
    const accessToken = response.tokenObj["access_token"];
    console.log(response.tokenObj["access_token"]);
    console.log(response.profileObj["email"]);
    console.log(response.profileObj["familyName"]);
    console.log(response.profileObj["givenName"]);

    socialLogin(dispatch, response, props.history);

    props.history.push("/dashboard");
  };

  const responseGoogleFailure = (response) => {
    console.log("Google Error", response.error);
    if (response.error === "popup_closed_by_user") {
      setMessage({
        ...message,
        googleError: response.error,
      });
    }
  };

  const responseFacebook = (response) => {
    console.log(response);
  };
  const handleGoogleClick = () => {};

  return (
    <>
      <LoginContainer classname="register-container">
        {is_authenticated || token ? (
          <LandingPage></LandingPage>
        ) : (
          <LoginWrapper>
            <LoginBox>
              <LoginHeader>Sign Up </LoginHeader>
              <Topq>
                <YesAccount>Dont' have an Account?</YesAccount>
                <NavLinksTopQ to="/sign-up">Sign Up</NavLinksTopQ>
              </Topq>

              <LoginForm>
                <SocialDiv>
                  <IconStyle1>
                    <FontAwesomeStyleFacebook>
                      <FacebookButton
                        appId="1049082045899726"
                        fields="name,email,picture"
                        // onClick={componentClicked}
                        callback={responseFacebook}
                      />
                    </FontAwesomeStyleFacebook>
                  </IconStyle1>
                </SocialDiv>
                <SocialDiv>
                  <IconStyle2>
                    <FontAwesomeStyleGoogle>
                      <GoogleButton
                        clientId="597319504816-kbaggekv21tg5tdb253qdtfbcmos2d9g.apps.googleusercontent.com"
                        buttonText="Continue with google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogleFailure}
                        cookiePolicy={"single_host_origin"}
                      />
                    </FontAwesomeStyleGoogle>
                  </IconStyle2>
                </SocialDiv>

                <hr></hr>

                {message.googleError && (
                  <Message negative>
                    <Message.Header>Sing In error from Google</Message.Header>
                    <p>{message.googleError}</p>
                  </Message>
                )}

                {signOnSuccess && (
                  <Message positive>
                    <Message.Header>User Created</Message.Header>
                    <p>Enter your username and password</p>
                  </Message>
                )}
                {!errors.username && !errors.password && errorMessage ? (
                  <Message negative>
                    <Message.Header>
                      Incorrect username or password
                    </Message.Header>
                    <p>Please enter Valid username and password</p>
                  </Message>
                ) : (
                  ""
                )}
                <SignUpDetail>
                  <DetailGrid>
                    <LoginFormInput>
                      <FormName>Username</FormName>
                      <FormField
                        name="username"
                        type="username"
                        value={values.username}
                        onChange={handleChange}
                      ></FormField>
                      {errors.username && (
                        <ErrorsSignUp>
                          <FaExclamationCircle></FaExclamationCircle>
                          {errors.username}
                        </ErrorsSignUp>
                      )}
                    </LoginFormInput>
                  </DetailGrid>
                  <DetailGrid>
                    <LoginFormInput>
                      <FormName>Password</FormName>
                      <FormField
                        name="password"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                      ></FormField>
                      {errors.password && (
                        <ErrorsSignUp>
                          <FaExclamationCircle></FaExclamationCircle>
                          {errors.password}
                        </ErrorsSignUp>
                      )}
                    </LoginFormInput>
                  </DetailGrid>
                </SignUpDetail>
                <LoginButton onClick={handleSubmit}>Sign In</LoginButton>
              </LoginForm>
              {loading ? (
                <div class="ui active centered inline loader"></div>
              ) : (
                ""
              )}
            </LoginBox>
          </LoginWrapper>
        )}
      </LoginContainer>
    </>
  );
}

export default Login;
