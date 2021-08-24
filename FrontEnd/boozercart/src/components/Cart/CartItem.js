// import React from "react";
// import { Link } from "react-router-dom";
// import { productListURL } from "../../constants";

// function CartItem() {
//   const [dataItems, setDataItems] = useState([]);

//   useEffect(() => {
//     axios
//       .get(productListURL)
//       .then((res) => {
//         setDataItems(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   const handleContextAddToCart = (slug) => {
//     CarItemTotal(dispatch, slug);
//   };
//   return (
//     <>
//       <CartItemContainer>
//         <CartItemWrapper>
//           {dataItems.map((dataitem, key) => (
//             <InnerCard>
//               <InnerCardWrapper>
//                 <CartImageItem src={dataitem.picture}></CartImageItem>
//                 <CartItemTitleWrapper>
//                   <Link
//                     to={`/item-detail/${dataitem.id}`}
//                     key={dataitem.id}
//                     style={{ textDecoration: "none" }}
//                   >
//                     <CartITemTitle>{dataitem.title} </CartITemTitle>
//                   </Link>
//                 </CartItemTitleWrapper>
//                 <CartItemPrice>${dataitem.price}</CartItemPrice>
//                 <AddToCartdiv
//                   onClick={() => handleContextAddToCart(dataitem.slug)}
//                 >
//                   Add to Cart
//                 </AddToCartdiv>
//               </InnerCardWrapper>
//             </InnerCard>
//           ))}
//         </CartItemWrapper>
//       </CartItemContainer>
//     </>
//   );
// }

// export default CartItem;
