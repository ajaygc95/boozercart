import styled, { isStyledComponent } from "styled-components";
import { Button, Container } from "../../../globalStyles";
import { Link } from "react-router-dom";

import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";

export const LoginContainer = styled(Container)`
  max-width: 1100px;
  min-height: 100%;
  margin: auto;
  /* position: relative; */
  margin-bottom: 30px;
  margin-top: 10px;
`;

export const LoginWrapper = styled.div`
  margin-top: 20px;
  margin: auto;
  width: 400px;
  padding: 10px 20px;
  text-align: center;
  box-shadow: 2px 3px 24px 0px rgba(0, 0, 0, 0.75);
  /* background-color: #f0efe9; */

  /* margin-top: 20px;
  box-shadow: 2px 3px 24px 0px rgba(0, 0, 0, 0.75);

  padding: 10px 20px;
  width: 400px;
  min-height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center; */

  @media screen and (max-width: 820px) {
    margin-top: 20px;
    width: 100%;
    padding: 0px 0px;
    text-align: center;
    box-shadow: none;
  }
`;

export const LoginBox = styled.div`
  width: auto;
  padding: 20px;
`;

export const Topq = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
export const YesAccount = styled.p``;

export const NavLinksTopQ = styled(Link)`
  color: #ed0202;
  font-size: 1.2rem;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const LoginForm = styled.form`
  margin-top: 20px;
  display: grid;
  align-self: center;
  grid-gap: 10px;

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: auto;
  }
`;

export const SocialDiv = styled.div``;

export const FontAwesomeStyle = styled.div`
  /* display: flex;
  justify-content: center;
  padding: 10px 20px;
  align-items: center;

  @media screen and (max-width: 820px) {
    font-size: 1rem;
  } */
`;
export const FontAwesomeStyleGoogle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 820px) {
    font-size: 1rem;
  }
`;
export const FontAwesomeStyleFacebook = styled.div`
  background: #4267b2;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 820px) {
    font-size: 1rem;
  }
`;

export const SocialLabel = styled.div`
  font-weight: bold;
  margin-left: 10px;
  font-size: 20px;

  @media screen and (max-width: 820px) {
    font-size: 1.1rem;
  }
`;

export const IconStyle1 = styled.div`
  border: 2px solid white;
  color: #4267b2;

  &:hover {
    cursor: pointer;
    background: white;
    border: 2px solid black;
    color: white;
  }
`;

export const IconStyle2 = styled.div`
  color: red;
  border: 2px solid #4285f4;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
    color: white;
    border: 2px solid black;
  }
`;

export const GoogleButton = styled(GoogleLogin)`
  width: 100%;
  height: 55px;

  @media screen and (max-width: 768px) {
    height: 40px;
  }
`;

export const FacebookButton = styled(FacebookLogin)``;

export const SignUpDetail = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const DetailGrid = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-around;
`;

export const LoginFormInput = styled.div`
  width: 100%;
  margin-right: 6px;
`;

export const FormName = styled.h4`
  font-size: 0.9rem;
  padding-left: 5px;
  margin-bottom: 5px;
  text-align: left;
  margin-left: 3px;
`;
export const FormField = styled.input`
  width: 100%;
  border: none;
  height: 50px;
  padding-left: 10px;
  background: #d1d3e8;

  &::placeholder {
    padding-left: 10px;
  }
`;

export const LoginHeader = styled.h1`
  /* font-size: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center; */
`;

export const LoginButton = styled(Button)`
  /* padding: 15px 40px;
  font-size: 20px; */
`;

export const ErrorsSignUp = styled.p`
  padding: 4px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: red;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
`;
