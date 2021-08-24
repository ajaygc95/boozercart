import React from "react";
import { LeftBarContainer, LeftBarWrapper } from "./Leftbar.element";

function LeftBar() {
  return (
    <>
      <LeftBarContainer>
        this is main bar
        <LeftBarWrapper>
          <h1>This is left bar </h1>
        </LeftBarWrapper>
      </LeftBarContainer>
    </>
  );
}

export default LeftBar;
