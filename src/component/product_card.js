import React, { Component } from 'react';
import axios from "axios";

class ProductCard extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    axios.get("http://localhost:3000/crud").then((res) => {
      console.log(res);
      this.setState({ products: res.data });
    });
  }

  render() {
    return (
      <div className="prodCard justify-content-center">
        {this.state.products.map((product) => (
          <div key={product.id} >
            <div className="card-body glow-on-hover">
              <div className="title">
                <div className="mb-2">
                  <button>
                    <img
                      width="270"
                      src="../assets/pegasus.jpeg"
                      alt="product card"
                    />
                  </button>
                </div>
                <div className="card-title text-left">
                  <h5>{product.name}</h5>
                </div>
                <p className="text-left">Men's Shoe</p>
                <div className="text-left pricing">
                  <h6>{product.price}</h6>
                  {/* <a href="#" class="btn btn-dark px-5 py-2 mb-5">Purchase</a> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ProductCard;
