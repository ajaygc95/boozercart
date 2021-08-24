import React, { useEffect, useState, useContext } from "react";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

import { Button } from "../../globalStyles";
import { logout } from "../Context/Action/Action";
import { useAuthDispatch, useAuthState } from "../Context/AuthContext";
import { useCartDispatch, useCartState } from "../Context/CartContext";

import {
  Nav,
  NavbarContainer,
  NavIcon,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
  SignInButton,
  CartButton,
  CartItemLabel,
  ShoppingCartIcon,
  ProfileIconWrapper,
  LogOuttext,
  Username,
} from "./NavBar.element";
import { getInitialCartItem } from "../Context/Action/cartAction";
import LeftBar from "./LeftBar/LeftBar";
import MapSearch from "../Map/MapSearch";

const NavBar = (props) => {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("user");

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const [cartItems, setCartItems] = useState(0);
  const [counter, setCounter] = useState(0);

  const [navbar, setNavBar] = useState("white");

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const cartDispatch = useCartDispatch();
  const items = useCartState();

  const dispatch = useAuthDispatch(); //get the dispatch method from the useDispatch custom hook
  const { is_authenticated, loading, errorMessage, user } = useAuthState(); //read the values of loading and errorMessage from context
  console.log("is authenticated: ", is_authenticated);

  const handleLogout = (e) => {
    e.preventDefault();
    logout(dispatch);
  };

  useEffect(() => {
    getInitialCartItem(cartDispatch);
    showButton();
  }, [user, is_authenticated]);

  window.addEventListener("resize", showButton);

  return (
    <>
      <Nav backgroundColor={navbar}>
        <NavbarContainer>
          {is_authenticated || (token != "" && token != undefined) ? (
            <>
              <NavLogo to="/dashboard">
                <NavIcon />
                BoozerCart
              </NavLogo>
              <MapSearch />
            </>
          ) : (
            <>
              <NavLogo to="/">
                <NavIcon />
                BoozerCart
              </NavLogo>
              <MapSearch />
            </>
          )}

          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <NavMenu onClick={handleClick} click={click}>
            {token != "" && token != undefined ? (
              <>
                <CartButton to="/cart">
                  <ShoppingCartIcon>
                    <FaShoppingCart></FaShoppingCart>
                  </ShoppingCartIcon>

                  <CartItemLabel>{items.totalItems}</CartItemLabel>
                </CartButton>
                <NavBtnLink>
                  <ProfileIconWrapper>
                    <Username>{username}</Username>
                    <CgProfile></CgProfile>
                  </ProfileIconWrapper>
                  <ProfileIconWrapper onClick={handleLogout}>
                    <LogOuttext>logout</LogOuttext>
                  </ProfileIconWrapper>
                </NavBtnLink>
              </>
            ) : (
              <>
                <NavItemBtn>
                  <SignInButton>
                    <NavItem>
                      <NavLinks to="/sign-in">Sign In</NavLinks>
                    </NavItem>
                  </SignInButton>
                  {button ? (
                    <NavBtnLink to="/sign-up">
                      <Button> Sign Up</Button>
                    </NavBtnLink>
                  ) : (
                    <NavBtnLink to="/sign-up">
                      <Button fontBig primary>
                        Sign Up
                      </Button>
                    </NavBtnLink>
                  )}
                </NavItemBtn>
              </>
            )}
          </NavMenu>
        </NavbarContainer>
      </Nav>
      <LeftBar></LeftBar>
    </>
  );
};

export default NavBar;
