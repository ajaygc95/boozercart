import React, { useState } from "react";
import { MapHeroContainer, MapHeroWrapper } from "./MapHero.element";

function MapHero() {
  const [Type, setType] = useState();
  return (
    <>
      <MapHeroContainer>
        <MapHeroWrapper></MapHeroWrapper>
      </MapHeroContainer>
    </>
  );
}

export default MapHero;
