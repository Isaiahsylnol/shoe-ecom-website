import React, { Component } from 'react';
class ProductCard extends Component {
  constructor(props) {
    super()
    this.state = {
      
       data: 'some default data',
       field: ''
    }
 }

 componentDidMount() {
  if (!this.props.product){
    console.log("empty set");
  } else {
    console.log("state found");
    console.log(this.props.product);
  }

 }
  render() {
    return (
 
      <div className="prodCard justify-content-center">
     
          <div >
            {/* <ProductDetails item={product.name} /> */}
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
                  <h5>{this.props.product.name}</h5>
                </div>
                <p className="text-left">Men's Shoe</p>
                <div className="text-left pricing">
                  <h6>{this.props.product.price}</h6>
                  {/* <a href="#" class="btn btn-dark px-5 py-2 mb-5">Purchase</a> */}
                </div>
              </div>
            </div>
          </div>
      </div>
 
    );
  }
}

export default ProductCard;
