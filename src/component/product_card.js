import React, { Component } from 'react';

class ProductCard extends Component {
  render() {
    return <div class="card">
    <div class="card-body">
        <div class="title">
            <div class="card-title">
                <h5>{this.props.title}</h5>
            </div>
            <div>
              <img width="270" src={this.props.image}/>
            </div>
            <p class="card-text">
                This is the text for the given card
            </p>
            <div class="pricing">
                <h1>${this.props.price}</h1>
                <a href="#" class="btn btn-dark px-5 py-2 mb-5">Purchase</a>
            </div>
        </div>
    </div>
</div>
  }
}

export default ProductCard; 