import styled from "styled-components";
import { Container } from "../../globalStyles";

export const HomeFeedContainer = styled.div`
  max-width: 1500px;
  margin: auto;
  margin-top: 50px;
`;

export const ContainerWrapper = styled.div``;

export const HomeFeedWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: auto;
  grid-gap: 20px;
  align-items: center;

  @media screen and (max-width: 1300px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 20px 24px;
  }
  @media screen and (max-width: 960px) {
    display: grid;
    grid-template-columns: 1fr;
    padding: 20px 24px;
  }
`;

export const BoxWrapper = styled.div`
  /* border: 2px solid red; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: 150px;
  grid-gap: 20px;

  @media screen and (max-width: 960px) {
    padding: 20px 20px;
    height: auto;
  }
  @media screen and (max-width: 768px) {
    padding: 0 0;

    height: auto;
    grid-template-columns: 1fr;
  }
`;

export const HeaderTitle = styled.div`
  font-size: 25px;
  margin-bottom: 30px;
`;

export const HomeFeedBox1 = styled.div`
  /* background: orange; */
  padding-top: 5px;
  display: flex;
  justify-content: space-between;
  list-style: none;
  font-family: Calibri;
  margin-bottom: 30px;

  @media screen and (max-width: 960px) {
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 10px;
  }
`;

export const TitleWrapper = styled.div`
  align-self: flex-start;
`;

export const HomeFeedBox = styled.div`
  list-style: none;
  color: #666e66;
  margin-bottom: 5px;
`;

export const StoreTitleHeader = styled.a`
  padding: 4px 4px;
  color: black;
  font-size: 1.4rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const ImageWrapper = styled.div`
  align-self: flex-start;

  @media screen and (max-width: 768px) {
    widht: 100%;
    /* background: yellow;
    padding: 20px 20px;
    height: auto;
    grid-template-columns: 1fr; */
  }
`;
export const ItemDetails = styled.div`
  width: 100%;
  height: 100%;
`;

export const HomeImage = styled.img`
  width: 275px;
  height: 150px;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
`;

export const CircleWrapper = styled.div`
  align-self: flex-start;
`;

export const Circle = styled.div`
  display: inline-block;
  background: #dadbe0;
  text-align: center;
  height: 30px;
  width: 30px;
  font-size: 12px;
  font-weight: bold;
  line-height: 20px;
  padding: 5px;
  border-radius: 50%;
`;

export const FinalLink = styled.a``;
