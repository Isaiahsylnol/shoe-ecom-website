import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

class ProductCard extends Component {
  state = {
    products: [],
    item: "hee",
    home: "changed text"
  };

  componentDidMount() {
    axios.get("http://localhost:3000/crud").then((res) => {
      console.log(res);
      this.setState({ products: res.data });
    });
  }

  onChange(id) {
    this.props.item(this.state.home);
    console.log(this.state.item);
    //console.log(this.state.item);
  }

  render() {
    return (
      <Link to="/detail" onClick={this.onChange.bind(this)}>
      <div className="prodCard justify-content-center">
        {this.state.products.map((product) => (
          <div key={product.id} prodData={this.state.item}>
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
      </Link>
    );
  }
}

export default ProductCard;
