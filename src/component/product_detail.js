import React, { Component, useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import HorizontalProdCard from "./horizontal_prod_card";
import Button from "@material-ui/core/Button";
import 'react-toastify/dist/ReactToastify.css';

function ProductDetail(props) {
  
  const [product, setProduct] = useState(props.product);

  useEffect(() => {
    if (!props.product) {
      console.log("empty set");
    } else {
      // State found 
      setProduct(props.product);
      console.log(product);
    }
    if (product.color) {
      console.log("No color variants");
    }
    product.color.forEach((cor) => {
      console.log("color: " + cor);
    });
  }, []);

  const handleClick = (event, someParameter) => {

    console.log(someParameter);
  };

  return (
    <div key={props.product.id} className="prodCard justify-content-center">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div>xs=12</div>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
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
                    <h5>{props.product.name}</h5>
                  </div>
                  <p className="text-left">Detail of: Men's Shoe</p>
                  <div className="text-left pricing">
                    <h6>{props.product.price}</h6>
                    {/* <a href="#" class="btn btn-dark px-5 py-2 mb-5">Purchase</a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid className="grid-container" item lg={4} md={5} sm={6} xs={12}>
          <div>
            {props.product.color.map((color) => (
              <button
                className="color-select"
                style={{
                  backgroundColor: color,
                }}
                onClick={(e) => {
                  handleClick(e, color);
                }}
              ></button>
            ))}
          </div>
          <div className="size-btn-container">
            {props.product.size.map((size) => (
              <button
                className="button1"
                onClick={(e) => {
                  handleClick(e, size);
                }}
              >
                {size}
              </button>
            ))}
          </div>
          <p>
            In et cillum commodo qui consectetur qui minim cillum magna esse
            tempor. Irure et cillum consectetur aute esse id velit. Nostrud sunt
            nulla veniam qui consequat magna irure proident officia. Velit
            commodo proident nulla sunt labore quis sunt Lorem.
          </p>
          <div>
          <Button id="purchase" variant="contained" color="secondary">
          Purchase
</Button>
         
          </div>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <div>
            <HorizontalProdCard />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductDetail;
