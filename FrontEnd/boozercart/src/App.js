import NavBar from "./components/NavBar/NavBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import GlobalStyle from "./globalStyles";
import LandingPage from "./components/LandingPage/LandingPage";
import Register from "./components/Accounts/Register/Register";
import Login from "./components/Accounts/SignIn/Login";
import Footer from "./components/Footer/Footer";
import { AuthProvider } from "./components/Context/AuthContext";
import HomePage from "./components/HomePage/HomePage";
import DetailStorePage from "./pages/DetailStore/DetailStorePage";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CartProvider } from "./components/Context/CartContext";
import { DetailStore } from "./components";
import MapSearch from "./components/Map/MapSearch";
import MainBar from "./components/NavBar/Mainbar/MainBar";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51JBpqhLc7vwlsP10WxmiuOzlfPbBRgZ3BMlcbebI6FLVctWXIRVTKDz6gxNbmiKJwCBIaWOZ4QtVimfhH7DjgoLI007OkEKglI"
);

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <GlobalStyle />

          <CartProvider>
            <NavBar></NavBar>
            {/* <MainBar /> */}
            <Route path="/cart" component={Cart}></Route>

            <Switch>
              <Route path="/" exact component={LandingPage}></Route>
              <Route path="/sign-up" component={Register}></Route>
              <Route path="/sign-in" component={Login}></Route>
              <Route path="/dashboard" component={HomePage}></Route>
              <Route path="/search" component={MapSearch}></Route>

              <Route path={"/detail-store/:id"} component={DetailStore}></Route>

              <Elements stripe={stripePromise}>
                <Route path="/checkout" component={Checkout}></Route>
              </Elements>
            </Switch>

            <Footer />
          </CartProvider>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
