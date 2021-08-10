import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class ProductDetail extends Component {

 componentDidMount() {
  if (!this.props.product){
    console.log("empty set");
  } else {
    console.log("state found");
    console.log(this.props.product);
  }
  if (!this.props.product.color){
      console.log("No color variants");
    }
 }
  render() {
    return (
 
      <div key={this.props.product.id} className="prodCard justify-content-center">
          <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper >xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper >
          <div >
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

          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper> <h5>{this.props.product.color}</h5></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper >xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper >xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper >xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper >xs=3</Paper>
        </Grid>
      </Grid>
      </div>
    );
  }
}

export default ProductDetail;
