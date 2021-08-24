import styled from "styled-components";
import { Container } from "../../../globalStyles";

export const ListItemContainer = styled(Container)`
  max-width: 1300px;
  margin: auto;
`;

export const ListItemWrapper = styled.div`
  padding: 0px 24px;
  max-width: 1100px;
  color: #444;
  /* background: yellow; */
`;

export const ListNavContainer = styled.div`
  margin-top: 20px;
  padding: 20px 24px;
  font-family: sans-serif;
  display: flex;
  height: 40px;
  align-items: center;
  gap: 30px;
  width: 1000px;
  margin-bottom: 10px;
  @media screen and (max-width: 600px) {
    background: red;
    font-size: 0.8rem;
    width: 550px;
  }
`;

export const ListItems = styled.li`
  text-decoration: none;
  list-style: none;
  font-size: 1.2rem;
  font-weight: bold;
  color: #4f4d4f;

  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

export const ListItemWrapContainer = styled.div`
  padding: 20px 24px;

  @media screen and (max-width: 991px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const TopHeader = styled.h3`
  font-family: sans-serif;
  color: black;
  align-self: flex-start;
`;

export const ItemCard = styled.div`
  display: grid;
  margin-top: 20px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  @media screen and (max-width: 991px) {
    grid-template-columns: 1fr;
    padding: 10px;
    justify-items: center;
  }
`;

export const InnerCard = styled.div`
  padding: 10px 12px;
  border: 1px solid #888;
  border-radius: 5px;
  height: 180px;
  width: 500px;
  display: flex;
  justify-content: space-between;

  &:hover {
    box-shadow: 2px 3px 24px 0px rgba(0, 0, 0, 0.75);
  }

  @media screen and (max-width: 600px) {
    width: 400px;
  }
`;

export const InnerCardWrapper = styled.div`
  list-style: none;
  padding: 10px 10px;
`;
export const InnerHeader = styled.a`
  color: black;
  font-size: 1.4rem;
`;

export const InnerDescript = styled.text`
  color: #444;
  font-family: DD-TTNorms, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  font-weight: bold;
  line-height: 20px;
  color: rgb(118, 118, 118);
  font-size: 0.75rem;
`;

export const InnerPrice = styled.h4`
  font-size: 1rem;
  padding: 0px 0px;
  color: #4f4d4f;
`;
export const InnerItemImage = styled.img``;

export const AddToCartdiv = styled.button`
  margin-top: 10px;
  margin-left: -5px;
  background: #2fa4d6;
  text-align: center;
  padding: 10px 15px;
  border: none;
  color: white;

  &:hover {
    background: black;
  }
`;

export const ItemListWrapper = styled.li``;
