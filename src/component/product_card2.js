import React, { Component } from 'react';

class ProductCard2 extends Component {
  render() {
    
    return <div className="card-2  border-0">
    <div className="card-body glow-on-hover">
        <div className="title">
            <div className="mb-2">
            <button>
              <img height="570" src={this.props.image}/>
            </button>
            </div>
            <div className="card-title text-left">
                <h3>{this.props.title}</h3>
            </div>
            <p className="text-left">
                Men's Shoe
            </p>
        </div>
    </div>
</div>
  }
}

export default ProductCard2;
