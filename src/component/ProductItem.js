import React, { useEffect, useState } from 'react';

const ProductItem = props => {
 
    const [product] = useState(props.product);
    const [appState, changeState] = useState({
      activeColor: null,
      activeSize: null,
      prodSizes: props.product.size,
      colors: props.product.color
    });

      function toggleActive(obj) {
        if(obj){
          //console.log(obj);
          changeState({...appState, activeSize: obj});
        }
      }
      
      function toggleStyle(style, index) {
        if(style == appState.activeSize){
         console.log(typeof(style));
          return "button1 active-sel";
        } 
        if(style == appState.activeColor){
          console.log(typeof(style));
          return "button1 active-sel";
        } 
         else {
          return "button1 inactive";
        }
      }

    return(
      <div className="tile is-ancestor">
      <div className="tile is-parent">
        <div className="tile is-child box">
        <figure>
              <img
                width="270"
                src="../assets/pegasus.jpeg"
                alt={props.description}
              />
        </figure>
        </div>
        <div className="tile is-child box">
        <b style={{ textTransform: "capitalize" }}>
              {product.name}{" "}
            </b><br/>
            <h5 className="tag is-primary">{product.price}</h5>
            <div>{product.description}</div>
            {product.stock > 0 ? (
              <small>{product.stock + " Available"}</small>
            ) : (
              <small className="has-text-danger">Out Of Stock</small>
            )}
            <div className="is-clearfix">
            <div>
            {props.product.color.map((color, index) => (
              <button
                style={{
                  backgroundColor: color,
                  padding: "15px",
                  marginTop: "2em",
                  maxWidth: "30px",
                  maxHeight: "30px",
                }}
                key={color}
                className={toggleStyle(color, index)}
                onClick={() => {
                  toggleActive(color);
                }}
              ></button>
            ))}
          </div>
          <div className="size-btn-container">
            {props.product.size.map((size, index) => (
              <button
              key={size}
                className={toggleStyle(size, index)}
                onClick={() => {
                  toggleActive(size);
                }}
              >
                {size}
              </button>
            ))}
          </div>
              <button
                className="button is-dark is-rounded"
                onClick={() =>
                  props.addToCart({
                    id: product.name,
                    product,
                    amount: 1
                  })
                }
              >
                Add to Cart
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;