import React, { useState } from "react";

const ProductTooltip = () => {
  const [status, setStatus] = useState("hidden");

  const btnStyle = {
    visibility: `${status}`,
    borderRadius: "55%",
    height: "50px",
    width: "50px",
    margin: "5px",
  };

  return (
    <div
      onMouseEnter={() => setStatus("visible")}
      onMouseLeave={() => setStatus("hidden")}
    >
      <a href="#" style={btnStyle} className="btn btn-actions">
        <span class="material-icons">bookmark</span>
      </a>

      <a href="#" style={btnStyle} className="btn btn-actions">
        <span class="material-icons">shopping_bag</span>
      </a>

      <a href="#" style={btnStyle} className="btn btn-actions">
        <span class="material-icons">share</span>
      </a>
    </div>
  );
};

export default ProductTooltip;
