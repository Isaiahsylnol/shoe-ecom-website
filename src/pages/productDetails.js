import React, { Component } from 'react';

class ProductDetails extends Component {

  onPageLoad() {
    this.props.change(this.state.home);
  }

  render() {
    return (
      <div>
        <h1>Product details</h1>
        <h2>{this.props.item}</h2>
      </div>
    );
  }
}

export default ProductDetails;
