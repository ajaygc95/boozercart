import { CardElement } from "react-stripe-elements";
import styled from "styled-components";

export const PayContainer = styled.div`
  background: #f7fafc;
  margin: auto;
  max-width: 1300px;
`;

export const CheckoutpayWrapper = styled.div`
  width: 800px;
  /* box-shadow: 0px -1px 5px 0px rgba(0, 0, 0, 0.58);
  -webkit-box-shadow: 0px -1px 5px 0px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: 0px -1px 5px 0px rgba(0, 0, 0, 0.58); */
  height: 100%;
  margin: auto;
  padding: 40px 60px;
`;

export const TopTitle = styled.legend`
  margin-bottom: 20px;
  font-size: 2rem;
  padding: 10px 12px;
  background: #e6db4e;
  text-align: center;
`;
export const CheckoutDetailContainter = styled.fieldset`
  padding: 20px 24px;
  border-radius: 5px;
`;

export const TopTextLine = styled.legend`
  font-size: 2rem;
  text-align: center;
  padding: 0px 20px;
  color: white;

  color: #e32b6b;
`;

export const CheckoutTable = styled.form``;

export const FormInput = styled.fieldset`
  background: white;
  width: 90%;
  /* box-shadow: 0px -1px 5px 0px rgba(0, 0, 0, 0.58); */
  border-radius: 5px;
  display: grid;
  gap: 10px;
  margin: 20px auto;
`;

export const TopTextLineForm = styled.legend`
  margin: auto;
  font-size: 1.2rem;
  color: #2fa4d6;
  text-align: center;
  padding: 0px 20px;
`;

export const FormInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  height: 50px;
  align-items: center;
  /* border-bottom: 2px solid #aaadb3; */
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
`;

export const FormName = styled.text`
  font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1.2rem;
  width: 30%;
  text-align: right;
`;
export const ItemInput = styled.input`
  color: #676a6e;
  height: 50px;
  text-align: left;
  width: 70%;
  font-size: 1.1rem;
  border: none;
  background: none;
  appearance: none;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  &:focus {
    padding: 5px;
    color: red;
    appearance: none;
    border-color: blue;
  }
`;

export const CheckoutPayment = styled.fieldset`
  padding: 1% 10%;
  width: 90%;
  margin: 10px auto;
  font-size: 1.2rem;
`;
export const PayButton = styled.button`
  box-shadow: 0px -1px 5px 0px rgba(0, 0, 0, 0.58);
  -webkit-box-shadow: 0px -1px 5px 0px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: 0px -1px 5px 0px rgba(0, 0, 0, 0.58);
  margin-top: 20px;
  width: 100%;
  height: 50px;
  font-size: 1.2rem;
  margin-top: 20px;
  background: #2fa4d6;
  border: none;
  color: white;

  &:hover {
    background: black;
    color: #2fa4d6;
  }
`;

export const CardElementContainer = styled.div`
  margin-top: 20px;
  box-shadow: 0px -1px 5px 0px rgba(0, 0, 0, 0.58);
  -webkit-box-shadow: 0px -1px 5px 0px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: 0px -1px 5px 0px rgba(0, 0, 0, 0.58);
  height: 50px;
  padding: 20px 24px;
  border-radius: 5px;
`;

export const TopTextLinePayment = styled.legend`
  font-size: 1.2rem;
  color: #2fa4d6;
  text-align: center;
  padding: 0px 20px;
`;
