import React  from 'react'; 
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import ProductTooltip from './Product_Tooltip';

function StoreItems(props) {  

    return (
        <div>
      <Row>
        {props.products.map((product) => (
          <Col key={product.id} id={product.id} xs={12} sm={12} md={4} lg={3}>
            <Link to={`/detail/${product.id}`} variant="white" className="prod_links">
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
                  <div>
                    <h6>{product.price}</h6>
                    <ProductTooltip />
                  </div>
                </div>
              </div>
          </Link>
          </Col>
        ))}
      </Row>
      </div>
    );
}

export default StoreItems;