import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import HorizontalProdCard from "./horizontal_prod_card";

class ProductDetail extends Component {
  componentDidMount() {
    if (!this.props.product) {
      console.log("empty set");
    } else {
      console.log("state found");
      console.log(this.props.product);
    }
    if (!this.props.product.color) {
      console.log("No color variants");
    }
    this.props.product.color.forEach((cor) => {
      console.log("color: " + cor);
    });
  }

  handleClick() {
    console.log("Button pressed here");
  }

  render() {
    
    return (
      <div
        key={this.props.product.id}
        className="prodCard justify-content-center">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div>xs=12</div>
          </Grid>
          <Grid item xs={6}>
            <div>
              <div>
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
                    <p className="text-left">Detail of: Men's Shoe</p>
                    <div className="text-left pricing">
                      <h6>{this.props.product.price}</h6>
                      {/* <a href="#" class="btn btn-dark px-5 py-2 mb-5">Purchase</a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}>
              <div className="grid-container">
                {this.props.product.color.map((color) => (
                  <div className="color-select"
                    style={{
                      backgroundColor: color,
               
                    }}
                  ></div>
                ))}
              </div>
              <Grid item xs={3}> 
            <div className="grid-container-2">
                {this.props.product.size.map((size) => (
                  <button className="button1" onClick={this.handleClick}>
                  <div className="grid-child"
                    style={{        
                     
                    }}
                  >{size}</div>
                  </button>
                ))}
              </div>
          </Grid>
          </Grid>
          <Grid item lg={12} md={10} sm={12} xs={12}>
            <div><HorizontalProdCard/></div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ProductDetail;
