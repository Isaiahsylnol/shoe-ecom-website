import React from "react";
import withContext from "../context/withContext";
import 'react-toastify/dist/ReactToastify.css';
import ProductItem from "./ProductItem";

function ProductDetail(props) {
  const { product } = props;

  return (
    <div key={props.product.id} className="">
          <ProductItem
                product={product}
                addToCart={props.context.addToCart}
              />       
    </div>
  );
}

export default withContext(ProductDetail);
