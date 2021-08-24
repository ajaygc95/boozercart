import { Link as Link } from "react-router-dom";
// import { LinkR } from "react-scroll";
import styled from "styled-components";
import { FaBars, FaBeer, FaMagento } from "react-icons/fa";
import { Button } from "../../../globalStyles";

export const NavBar = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid gray;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  } ;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
  padding: 0px 24px;
  max-width: 1100px;
`;

export const NavBarLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const MobileIcon = styled.div`
  display: none;
  color: black;
  font-size: 2rem;

  @media screen and (max-width: 960px) {
    display: block;
    z-index: 999;
  }
`;
export const NavLogo = styled(Link)`
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;

  @media screen and (max-width: 960px) {
    justify-self: normal;
    margin-left: 30px;
  }
`;

export const NavIcon = styled(FaBeer)`
  margin-right: 0.5rem;
`;

export const NavMenuWrapper = styled.div`
  @media screen and (max-width: 960px) {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    left: ${({ click }) => (click ? 0 : "-100%")};
    transition: all 0.5s ease;
  }
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;

  @media screen and (max-width: 960px) {
    justify-content: flex-start;
    padding: 100px 0px;
    background-color: white;
    height: 100vh;
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    width: 70%;
  }

  @media screen and (max-width: 600px) {
    width: 70%;
  }
`;

export const NavItem = styled.li``;

export const NavLinks = styled(Link)``;

export const SignInButton = styled(Link)`
  padding: 10px 20px;
  font-size: 1.3rem;

  &:hover {
    text-decoration: underline;
  }

  /* @media screen and (max-width: 960px) {
    padding: 0;
    color: #2fa4d6;
    line-height: 50px;
    text-align: center;
    width: 100%;
  } */
`;

export const SignUpButton = styled(Link)`
  background-color: #2fa4d6;
  color: white;
  border: 2px solid #2fa4d6;
  padding: 10px 20px;
  font-size: 1.3rem;

  &:hover {
    background-color: white;
    border: 2px solid #2fa4d6;
  }
  /* @media screen and (max-width: 960px) {
    padding: 0;
    color: white;
    line-height: 50px;
    text-align: center;
    width: 100%;
  } */
`;
