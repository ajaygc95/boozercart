import React, { useState } from "react";
import {
  NavBar,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,

} from "./MainBar.element";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function MainBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <NavBar>
        <NavbarContainer>
          <NavLogo to="/dashboard">
            <NavIcon />
            BoozerCart
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <NavMenu onClick={handleClick}></NavMenu>
        </NavbarContainer>
      </NavBar>
    </>
  );
}

export default MainBar;
