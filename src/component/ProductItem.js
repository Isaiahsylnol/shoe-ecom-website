import React, { useEffect, useState } from 'react';

const ProductItem = props => {
 
    const [product] = useState(props.product);

    useEffect(() => {
       console.log(props); 
    });

    const handleClick = (event, someParameter) => {

        console.log(someParameter);
      };

    return(
      <div className="tile is-ancestor">
      <div className="tile   is-parent">
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
              <button
                className="button is-small is-outlined is-primary"
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