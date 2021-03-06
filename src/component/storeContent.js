import React, { useState } from 'react'; 

import StoreItems from "./StoreItems";
 
const StoreContent = props => {
 
  if (props.filter.length >= 1){ return <div><StoreItems products={props.filter} /></div>;  } 
  else return <div ><StoreItems products={props.products}/></div>;
}

export default StoreContent;
