import React from "react";
import Map from "../Map/map";
import MapHero from "../Map/MapHero/MapHero";
import InfoSection from "./HeroPage/HeroPageItem";
import {
  homeObj,
  homeObjFour,
  homeObjThree,
  homeObjTwo,
} from "./HeroPage/HeroPageItemData";

function LandingPage() {
  return (
    <>
      <Map></Map>
      {/* <MapHero></MapHero> */}
      <InfoSection {...homeObj}></InfoSection>
      <InfoSection {...homeObjTwo}></InfoSection>
      {/* <InfoSection {...homeObjThree}></InfoSection>
      <InfoSection {...homeObjFour}></InfoSection> */}
    </>
  );
}

export default LandingPage;
