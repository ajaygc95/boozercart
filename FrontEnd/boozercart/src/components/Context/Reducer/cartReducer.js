export const initialState = {
  items: [],
  totalAmout: 0,
  totalItems: 0,
};

export const CartReducer = (initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log("Adding Item To cart");
      return {
        ...initialState,
      };
    case "INITIAL_CART":
      console.log("Whateever");
      // console.log("This is reducer payload", action.payload[0].items.length);
      return {
        ...initialState,
        items: action.payload[0].items,
        totalItems: action.payload[0].total_items,
        //   //     setDataItems(res.data[0].items);
      };
    case "DELETE_CART":
      return {
        ...initialState,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export default CartReducer;

// const handleRemoveItem = (itemid) => {
//   authAxios
//     .delete(orderItemDeleteURL(itemid))
//     .then((res) => {
//       console.log("Handle remove Item called()");
//       setRequestData(new Date());
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// const handleRemoveItem = (itemid) => {
//   authAxios
//     .delete(orderItemDeleteURL(itemid))
//     .then((res) => {
//       console.log("Handle remove Item called()");
//       setCart(res.data[0].items.length);
//       setRequestData(new Date());
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
