import React, { createContext, useContext, useReducer, useState } from "react";
import { productListURL } from "../../constants";
import { CartReducer } from "./Reducer/cartReducer";
import { initialState } from "./Reducer/cartReducer";

export const CartContext = createContext();
export const CartContextDispatch = createContext();

export function useCartState() {
  const context = React.useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCartDisptach must be used within a CartProvide");
  }

  return context;
}
export function useCartDispatch() {
  const context = React.useContext(CartContextDispatch);
  if (context === undefined) {
    throw new Error("useCartDisptach must be used within a CartProvide");
  }

  return context;
}

export const CartProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(CartReducer, initialState);
  return (
    <CartContext.Provider value={cartItems}>
      <CartContextDispatch.Provider value={dispatch}>
        {children}
      </CartContextDispatch.Provider>
    </CartContext.Provider>
  );
};
