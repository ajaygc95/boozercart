import React, { useState } from "react";

import axios from "axios";

import { registerUser } from "../../Context/Action/Action";
import { useAuthDispatch, useAuthState } from "../../Context/AuthContext";
import LandingPage from "../../LandingPage/LandingPage";

import {
  faFacebook,
  faGoogle,
  faApple,
} from "@fortawesome/free-brands-svg-icons";

import { FaExclamationCircle } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  FontAwesomeStyleFacebook,
  FontAwesomeStyleGoogle,
  FacebookButton,
  GoogleButton,
} from "../SignIn/Login.element";
import validateInfo from "../AccountUtils/ValidateInfo";

function Login(props) {
  const token = localStorage.getItem("token");
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    phonenumber: "",
  });

  const [errors, setErros] = useState({});
  const [created, setCreated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const dispatch = useAuthDispatch(); //get the dispatch method from the useDispatch custom hook
  const { loading, registerMessage } = useAuthState();

  //read the values of loading and registerMessage from context

  const handleSubmit = (e) => {
    e.preventDefault();

    setErros(validateInfo(values));

    console.log(Object.keys(errors).length);
    if (Object.keys(errors).length === 0) {
      registerUser(dispatch, values, props.history);
    } else {
    }
  };
  const [message, setMessage] = useState({
    loading: false,
    error: null,
    success: false,
  });

  const responseGoogle = (response) => {
    console.log(response);
    props.history.push("/dashboard");
  };

  const responseGoogleFailure = (response) => {
    setMessage({
      ...message,
      error: "there is errorr",
    });
  };

  const responseFacebook = (response) => {
    console.log(response);
  };
  const handleGoogleClick = () => {};

  return (
    <>
      <LoginContainer classname="register-container">
        {token && token != "" && token != undefined ? (
          <LandingPage></LandingPage>
        ) : (
          <LoginWrapper>
            <LoginBox>
              <LoginHeader>Sign Up</LoginHeader>
              <Topq>
                <YesAccount>Already have an account?</YesAccount>

                <NavLinksTopQ to="/sign-in">Sign In</NavLinksTopQ>
              </Topq>
              <LoginForm>
                <SocialDiv>
                  <IconStyle1>
                    <FontAwesomeStyleFacebook>
                      <FacebookButton
                        appId="1088597931155576"
                        // autoLoad={true}
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

                {Object.keys(errors).length === 0 && registerMessage ? (
                  <Message negative>
                    <Message.Header>Account Already exists</Message.Header>
                    <p>
                      Account with same username or email address already
                      exists.
                    </p>
                  </Message>
                ) : (
                  ""
                )}

                {/* {!registerMessage && created && (
                  <Message positive>
                    <Message.Header>User Created</Message.Header>
                    <p>Please login with your username and password</p>
                  </Message>
                )} */}

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
                      <FormName>Email</FormName>
                      <FormField
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                      ></FormField>
                      {errors.email && (
                        <ErrorsSignUp>
                          <FaExclamationCircle></FaExclamationCircle>
                          {errors.email}
                        </ErrorsSignUp>
                      )}
                    </LoginFormInput>
                  </DetailGrid>
                  <DetailGrid>
                    <LoginFormInput>
                      <FormName>Phone Number</FormName>
                      <FormField
                        name="phonenumber"
                        type="char"
                        value={values.phonenumber}
                        onChange={handleChange}
                      ></FormField>
                      {errors.phonenumber && (
                        <ErrorsSignUp>
                          <FaExclamationCircle></FaExclamationCircle>
                          {errors.phonenumber}
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
                  <DetailGrid>
                    <LoginFormInput>
                      <FormName>Verify Password</FormName>
                      <FormField
                        name="password2"
                        type="password"
                        value={values.password2}
                        onChange={handleChange}
                      ></FormField>
                      {errors.password2 && (
                        <ErrorsSignUp>
                          <FaExclamationCircle></FaExclamationCircle>
                          {errors.password2}
                        </ErrorsSignUp>
                      )}
                    </LoginFormInput>
                  </DetailGrid>
                </SignUpDetail>

                <LoginButton onClick={handleSubmit}>Sign Up</LoginButton>
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
