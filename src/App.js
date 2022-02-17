import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Footer from "./component/Footer";
import Header from "../src/component/Header";
import Login from "./component/Login";
import Cart from "./component/Cart";
import ProductDetails from "./pages/productDetails";
import Media from "./pages/media";
import ScrollToTop from "./utilies/ScrollToTop";
import ProductDetailCard from "../src/component/product_detail";
import ProtectedRoute from "./auth/ProtectedRoute";
import Context from "./context/Context";
import about from "./pages/about";
import Shop from "./pages/shop";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      cart: {},
      products: [],
    };
    this.routerRef = React.createRef();
  }

  addToCart = (cartItem) => {
    let cart = this.state.cart;
    if (cart[cartItem.id]) {
      cart[cartItem.id].amount += cartItem.amount;
    } else {
      cart[cartItem.id] = cartItem;
    }
    if (cart[cartItem.id].amount > cart[cartItem.id].product.stock) {
      cart[cartItem.id].amount = cart[cartItem.id].product.stock;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    this.setState({ cart });
  };

  removeFromCart = (cartItemId) => {
    let cart = this.state.cart;
    delete cart[cartItemId];
    localStorage.setItem("cart", JSON.stringify(cart));
    this.setState({ cart });
  };

  clearCart = () => {
    let cart = {};
    localStorage.removeItem("cart");
    this.setState({ cart });
  };

  checkout = () => {
    if (!this.state.user) {
      this.routerRef.current.history.push("/login");
      return;
    }

    const cart = this.state.cart;

    const products = this.state.products.map((p) => {
      if (cart[p.name]) {
        p.stock = p.stock - cart[p.name].amount;

        // axios.put(
        //   `http://localhost:3001/products/${p.id}`,
        //   { ...p },
        // )
      }
      return p;
    });

    this.setState({ products });
    this.clearCart();
  };

  async componentDidMount() {
    let user = localStorage.getItem("user");
    axios.get("http://localhost:3000/crud").then((res) => {
      user = user ? JSON.parse(user) : null;
      this.setState({ user, products: res.data });
    });
  }
  
  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          removeFromCart: this.removeFromCart,
          addToCart: this.addToCart,
          login: this.login,
          addProduct: this.addProduct,
          clearCart: this.clearCart,
          checkout: this.checkout,
        }}
      >    
          <ScrollToTop>
            <div className="App">
              <div className="container-fluid p-0">
               
                  <Header state={this.state}  />
                  <Switch>
                    <Route
                      exact
                      path="/"
                      render={(props) => (
                        <Home products={this.state.products} />
                      )}
                    ></Route>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/media" component={Media} />
                    <Route exact path="/cart" component={Cart} />
                    <Route path="/shop"><Shop products={this.state.products} /></Route>
                    <ProtectedRoute exact path="/about" component={about} />
                    <Route exact path="/detail" component={ProductDetails} />
                    {this.state.products.map((product, i) => (
                      <Route
                        exact
                        key={`route${i}`}
                        path={`/detail/${product.id}`}
                        render={(props) => (
                          <ProductDetailCard product={product} />
                        )}
                      />
                    ))}
                  </Switch>
                <Footer />
              </div>
            </div>
          </ScrollToTop>
      </Context.Provider>
    );
  }
}

export default App;
