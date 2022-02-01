import React from 'react'; 
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function StoreItems(props) {
    return (
        <div>
      <Row>
        {props.products.map((product) => (
          <Col key={product.id} id={product.id} xs={12} sm={12} md={4} lg={3}>
            <Button onClick={() => this.handleClick(product.model)} variant="white" className="prod_links"  >
            <div>
              <div className="prod-card-content">
                <div className="title">
                  <div className="mb-2">
                      <img
                        width="170"
                        src="../assets/pegasus.jpeg"
                        alt="product card"
                      />    
                  </div>
                  <h5>{product.name}</h5>
                  <h6>Men's Shoe</h6>
                  <div className="">
                    <h6>{product.price}</h6>
                    {/* <a href="#" class="btn btn-dark px-5 py-2 mb-5">Purchase</a> */}
                  </div>
                </div>
              </div>
            </div>
          </Button>
          </Col>
        ))}
      </Row>
      </div>
    );
}

export default StoreItems;