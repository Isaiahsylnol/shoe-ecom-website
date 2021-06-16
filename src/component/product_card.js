import React, { Component } from 'react';

class ProductCard extends Component {
  render() {
    
    return <div className="card border-0">
    <div className="card-body glow-on-hover">
        <div className="title">
            <div className="mb-2">
            <button>
              <img width="270" src={this.props.image}/>
            </button>
            </div>
            <div className="card-title text-left">
                <h5>{this.props.title}</h5>
            </div>
            <p className="text-left">
                Men's Shoe
            </p>
            <div className="text-left pricing">
                <h6>${this.props.price}</h6>
                {/* <a href="#" class="btn btn-dark px-5 py-2 mb-5">Purchase</a> */}
            </div>
        </div>
    </div>
</div>
  }
}

export default ProductCard;
