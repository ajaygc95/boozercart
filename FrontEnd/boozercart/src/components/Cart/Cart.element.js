import styled from "styled-components";
import { Container } from "../../globalStyles";
import { Link } from "react-router-dom";

export const CartContainer = styled(Container)`
  height: 100vh;
  @media screen and (max-width: 991px) {
    width: 100%;
    margin: 0;
    height: 100vh;
  }
`;

export const CartWrapper = styled.div`
  box-shadow: 2px 3px 24px 0px rgba(0, 0, 0, 0.75);
  text-align: center;
  padding: 20px 24px;
  height: 100vh;

  @media screen and (max-width: 991px) {
    /* background: red; */
  }
`;

export const CartHeaderTitle = styled.div`
  margin-top: 40px;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: center;
  gap: 20px;
  border-bottom: 2px solid #e32b6b;

  @media screen and (max-width: 991px) {
    font-size: 1.4rem;
    display: grid;
    grid-template-columns: 1fr;
  }
`;
export const EmptyCart = styled.div`
  margin-top: 200px;
  font-size: 2rem;
  text-align: center;
  border-bottom: 2px solid #e32b6b;
  height: 400px;

  /* height: 100vh;
  margin-top: 40px;
  line-height: 100px;
  font-size: 2rem;
  height: 500px;
  display: flex;
  justify-content: center;
  gap: 20px;
  border-bottom: 2px solid #e32b6b; */

  @media screen and (max-width: 991px) {
    font-size: 1.4rem;
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const StoreTitle = styled.div`
  color: #e32b6b;
  font-weight: bold;
`;

export const CartItemWrapper = styled.div`
  border-bottom: 2px solid gray;
  padding: 20px 20px;
  margin-top: 10px;
  height: 80px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  text-align: center;
  line-height: 50px;
  font-size: 1.2rem;

  @media screen and (max-width: 991px) {
    display: none;
  }
`;
export const CartItemWrapperTable = styled.div`
  border-bottom: 2px solid gray;
  padding: 20px 20px;
  margin-top: 10px;
  height: 80px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  text-align: center;
  line-height: 50px;
  font-size: 1.2rem;

  @media screen and (max-width: 991px) {
    display: grid;
    grid-template-areas: "quantity title title title price";
    height: auto;
  }
`;

export const CartItemNumber = styled.div`
  display: flexbox;
  justify-content: center;
  gap: 20px;

  @media screen and (max-width: 991px) {
  }
`;
export const CartItemDetail = styled.div`
  line-height: 20px;
  color: #424345;

  @media screen and (max-width: 991px) {
    grid-area: title;
    color: rgba(0, 0, 0, 0.7);
  }
`;
export const ItemQuantity = styled.div`
  font-size: 1.5rem;
  width: 50px;
  background: #dae0db;
  height: 50px;

  @media screen and (max-width: 991px) {
    display: flex;
    grid-area: quantity;
    height: 50px;
    background: white;
    text-align: left;
  }
`;
export const IconIncrease = styled.button`
  width: 30px;
  height: 30px;
  padding: 2px 2px;
  line-height: 30px;

  @media screen and (max-width: 991px) {
    display: none;
  }
`;
export const IconDecrease = styled.button`
  width: 30px;
  height: 30px;
  padding: 2px 2px;
  line-height: 30px;

  @media screen and (max-width: 991px) {
    display: none;
  }
  /* width: 30px;
  height: 30px;
  padding: 5px 5px;
  color: red;
  &:hover {
    color: red;
    background: green;
    color: white;
    cursor: pointer; */
`;
export const CartItemPrice = styled.div`
  @media screen and (max-width: 991px) {
    display: none;
    background: none;
  }
`;
export const CartItemPriceTotal = styled.div`
  @media screen and (max-width: 991px) {
    display: price;
    font-weight: bold;
    text-align: right;
    color: rgba(0, 0, 0, 0.8);
  }
`;

export const CartItemQuantity = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  @media screen and (max-width: 991px) {
    font-size: 0.8rem;
  }
`;
export const CartItemDetailHeader = styled.div`
  font-size: 1.3rem;
  font-weight: bold;

  @media screen and (max-width: 991px) {
    font-size: 0.8rem;
    font-weight: bold;
  }
`;
export const CartItemPriceHeader = styled.div`
  font-size: 1.3rem;
  font-weight: bold;

  @media screen and (max-width: 991px) {
    font-size: 0.8rem;
    font-weight: bold;
  }
`;

export const CartTotalPriceWrapper = styled.div`
  display: flexbox;
  justify-content: space-between;
  padding: 0px 80px;
  border-bottom: 2px solid #e32b6b;
  height: 100px;
  align-items: center;
  margin-bottom: 40px;
`;
export const CartTotal = styled.div`
  font-size: 1.9rem;
  font-weight: bold;
  color: #e32b6b;
  width: 76%;
  text-align: right;

  @media screen and (max-width: 991px) {
    width: auto;
  }
`;

export const DeleteIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  @media screen and (max-width: 991px) {
    display: none;
  }
`;
export const DeleteText = styled.text`
  color: red;
  text-decoration: underline;
`;
export const DeleteIcon = styled.button`
  color: red;
  width: 50px;
  padding: 5px 5px;
  border: none;
  height: 50px;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
    transition: all 0.3s ease-out;
  }
`;

export const CartCheckoutWrapper = styled.div`
  padding: 20px 20px;
  margin-top: 10px;
  height: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  line-height: 50px;
  font-size: 1.2rem;

  @media screen and (max-width: 991px) {
    margin-top: 0px;
    display: grid;
    grid-template-areas:
      "checkout checkout checkout"
      "continue continue continue";
  }
`;
export const ContinueShopping = styled(Link)`
  font-size: 1.5rem;
  text-decoration: underline;
  color: green;
  &:hover {
    text-decoration: underline;
    color: #e32b6b;
  }

  @media screen and (max-width: 991px) {
    grid-area: continue;
    font-size: 1.2rem;
  }
`;

export const ContinueToCheckoutButton = styled(Link)`
  font-size: 1.2rem;
  margin-right: 20px;
  border: none;
  background: black;
  color: white;
  float: right;

  &:hover {
    background: #e32b6b;
    color: black;
  }

  @media screen and (max-width: 991px) {
    grid-area: checkout;
  }
`;

export const CartItemDetailCheckout = styled.div`
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

export const TimesX = styled.div`
  display: none;

  @media screen and (max-width: 991px) {
    display: block;
    padding: 0px 5px;
    font-size: 0.9rem;
  }
`;
