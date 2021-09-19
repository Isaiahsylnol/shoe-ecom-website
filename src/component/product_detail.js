import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import HorizontalProdCard from "./horizontal_prod_card";
import Button from "@material-ui/core/Button";
import withContext from "../context/withContext";
import 'react-toastify/dist/ReactToastify.css';
import ProductItem from "./ProductItem";

function ProductDetail(props) {
  const { products } = props.context;
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
