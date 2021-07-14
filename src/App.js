import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Header from "../src/component/Header";
import CartDetails from "./pages/CartDetails";
import ProductDetails from "./pages/productDetails";

function App() {
  return (
    <Router>
      <div className="App">
          <Header />
            <div className="container-fluid p-0">
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route exact path="/cart">
                    <CartDetails />
                  </Route>
                  <Route exact path="/detail">
                    <ProductDetails />
                  </Route>
                </Switch>
              </div>
            </div>
    </Router>
  );
}

export default App;
