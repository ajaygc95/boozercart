import styled from "styled-components";
import { Container } from "../../globalStyles";
import { Link } from "react-router-dom";

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 6fr 2fr;

  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

export const SideWrapper = styled.div`
  height: 100vh;
`;

export const MiddleWrapper = styled.div``;

export const CheckoutWrapper = styled.div`
  padding: 20px 24px;
  box-shadow: -10px 0px 10px 1px #aaaaaa;
  @media screen and (max-width: 900px) {
    background: red;
  }
`;
export const TitleSubtitle = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TitleBar = styled.h3`
  text-align: center;
`;

export const PlaceOrderButton = styled.button`
  width: 50%;
  height: 50px;
  font-size: 1.3rem;
  margin: auto;
  border-radius: 20px;
  border: none;

`;

export const StoreTitle = styled.h1`
  font-size: 2rem;
  color: #e32b6b;
  margin-bottom: 20px;
`;

export const InnerCheckoutDetail = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 5px;
  padding: 10px 20px;
  margin-top: 40px;
  border-bottom: 2px solid #e32b6b;
`;

export const ValidPayment = styled.text`
  padding: 15px 10px;
  text-align: center;
  width: 80%;
  background: #e6db4e;
  margin: auto;
`;

export const Subtotal = styled.text`
  font-size: 1.2rem;
`;

export const DelivaryFee = styled.text`
  font-size: 1.2rem;
`;
export const FeesTax = styled.text`
  font-size: 1.2rem;
`;

export const Price = styled.text`
  font-size: 1.2rem;
  text-align: right;
`;

export const InnerCheckoutDetail1 = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 5px;
  font-size: 1.4rem;
  font-weight: bold;
  padding: 10px 20px;
  border-bottom: 1px solid gray;
`;
