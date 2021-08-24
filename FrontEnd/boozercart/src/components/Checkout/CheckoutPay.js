import React, { useState } from "react";
import {
  CheckoutDetailContainter,
  CheckoutpayWrapper,
  CheckoutTable,
  PayContainer,
  TopTextLine,
  FormInput,
  ItemInput,
  FormName,
  CheckoutPayment,
  FormInputWrapper,
  TopTitle,
  TopTextLinePayment,
  TopTextLineForm,
} from "./CheckoutPay.element";

import { AiFillCreditCard } from "react-icons/ai";
import { FaCcPaypal } from "react-icons/fa";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import PaymentCard from "../PaymentCard/paymentCard";

function CheckoutPay() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  return (
    <>
      <PayContainer>
        <CheckoutpayWrapper>
          <CheckoutDetailContainter>
            <TopTextLine>Checkout Detail</TopTextLine>
            <CheckoutTable>
              <FormInput>
                <TopTextLineForm>
                  Shipping and Billing Information
                </TopTextLineForm>
                <FormInputWrapper>
                  <FormName>Name</FormName>
                  <ItemInput
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                  ></ItemInput>
                </FormInputWrapper>
                <FormInputWrapper>
                  <FormName>Email</FormName>
                  <ItemInput
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                  ></ItemInput>
                </FormInputWrapper>
                <FormInputWrapper>
                  <FormName>Address</FormName>
                  <ItemInput
                    name="address"
                    type="text"
                    value={values.address}
                    onChange={handleChange}
                  ></ItemInput>
                </FormInputWrapper>
                <FormInputWrapper>
                  <FormName>City</FormName>
                  <ItemInput
                    name="city"
                    type="address"
                    value={values.city}
                    onChange={handleChange}
                  ></ItemInput>
                </FormInputWrapper>
                <FormInputWrapper>
                  <FormName>State</FormName>
                  <ItemInput
                    name="state"
                    type="state"
                    value={values.state}
                    onChange={handleChange}
                  ></ItemInput>
                </FormInputWrapper>
                <FormInputWrapper>
                  <FormName>ZIP Code</FormName>
                  <ItemInput
                    name="zipCode"
                    type="number"
                    value={values.zipCode}
                    onChange={handleChange}
                  ></ItemInput>
                </FormInputWrapper>
                <FormInputWrapper>
                  <FormName>Country</FormName>
                  <ItemInput
                    name="country"
                    type="text"
                    value={values.country}
                    onChange={handleChange}
                  ></ItemInput>
                </FormInputWrapper>
              </FormInput>
            </CheckoutTable>
            <CheckoutPayment>
              <TopTextLinePayment>Payment Information</TopTextLinePayment>
              <PaymentCard />
            </CheckoutPayment>
          </CheckoutDetailContainter>
        </CheckoutpayWrapper>
      </PayContainer>
    </>
  );
}

export default CheckoutPay;
