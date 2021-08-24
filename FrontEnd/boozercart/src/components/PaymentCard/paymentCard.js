import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import { FaGratipay } from "react-icons/fa";
import { CardNumberElement } from "react-stripe-elements";
import { authAxios } from "../../Utils";
import { Message } from "semantic-ui-react";

import {
  CardElementContainer,
  PayButton,
} from "../Checkout/CheckoutPay.element";

const PaymentCard = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState({
    loading: false,
    error: null,
    success: false,
  });

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
      setMessage((prevState) => ({
        ...prevState,
        error: error,
        success: false,
      }));
      console.log("[error]", error);
    } else {
      setMessage((prevState) => ({
        ...prevState,
        success: true,
        error: null,
      }));
      console.log("[PaymentMethod]", paymentMethod);
      // authAxios.post();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElementContainer>
        <CardElement
          options={{
            style: {
              base: {
                iconColor: "#666ee8",
                color: "balck",
                fontWeight: 400,
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
                fontSmoothing: "antialiased",
                fontSize: "15px",
                "::placeholder": {
                  color: "#aab7c4",
                },
                ":-webkit-autofill": {
                  color: "#666ee8",
                },
              },

              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
      </CardElementContainer>
      {message.error ? (
        <Message negative>
          <Message.Header>
            Card Information your provided is incorrect.
          </Message.Header>
          <p>Retry </p>
        </Message>
      ) : (
        ""
      )}
      {message.success ? (
        <Message positive>
          <Message.Header>Your Payment is success</Message.Header>
          <p>We will notify with order status</p>
        </Message>
      ) : (
        ""
      )}

      <PayButton
        loading={message.loading}
        disabled={message.loading}
        type="submit"
        disabled={!stripe}
      >
        Pay
      </PayButton>
    </form>
  );
};

export default PaymentCard;
