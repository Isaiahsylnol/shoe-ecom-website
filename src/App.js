import React, { Component } from 'react';
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Header from "../src/component/Header";
import CartDetails from "./pages/CartDetails";
import ProductDetails from "./pages/productDetails";
import ProductCard from "../src/component/product_card";

class App extends Component {
  
    state = {
      products: [],
       data: 'some default data',
       field: ''
    }
 

  componentDidMount() {
    axios.get("http://localhost:3000/crud").then((res) => {
      console.log(res);
      this.setState({ products: res.data });
    });
  }
  render(){
    return (
      <Router>
        <div className="App">
            <Header />
              <div className="container-fluid p-0">
                  <Switch>
                  
                    <Route exact path="/"
                    render={props => (
                      <Home product={this.state.products} />
                    )}>
                     
                    </Route>
              
                    <Route exact path="/cart">
                      <CartDetails />
                    </Route>
                    <Route exact path="/detail">
                      <ProductDetails />
                    </Route>
                    {this.state.products.map((product, i) => (
                  <Route
                    exact
                    key={`route${i}`}
                    path={`/detail/${product.id}`}
                    render={props => (
                      <ProductCard
                        product={product}
                        />
                    )}
                  />
                ))}

                    
                  </Switch>
                </div>
              </div>
      </Router>
    );
  }
}

export default App;
