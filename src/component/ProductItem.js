import React, { useEffect, useState } from 'react';

const ProductItem = props => {
 
    const [product] = useState(props.product);
    const [appState, changeState] = useState({
      activeObject: null,
      objects: props.product.size
    });

    useEffect(() => {
       console.log(props); 
    });

    const handleClick = (event, someParameter) => {
      if(someParameter >= 1){
        console.log("this is a number")
      }
      if(someParameter == typeof(String)){
        console.log("THis is a color");
      }
        console.log(someParameter);
      };

      function toggleActive(index) {
        changeState({...appState, activeObject: appState.objects[index]});
      }

      function toggleStyle(index) {
        if(appState.objects[index] === appState.activeObject){
          return "button1 active";
        } else {
          return " button1 inactive";
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
            {props.product.size.map((size, index) => (
              <button
              key={size}
                className={toggleStyle(index)}
                onClick={() => {
                  toggleActive(index);
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