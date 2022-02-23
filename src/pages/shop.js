import React from "react";
import { useState } from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StoreContent from "../component/StoreContent";

function Shop(props) {
  const [item, setItem] = useState(props.products);

    //Filter Function
  const filter = (model) => {
      if (model === "All") {
        setItem([]);
        return;
      }
  
  const filteredData = props.products.filter((product) => product.model === model);
      setItem(filteredData);
    };
 
    return(
      <Container>
    <Row>
      {/* Sidebar for product categories */}
      <Col xs={12} md={2} sm={12}>
        <ListGroup defaultActiveKey="/">
          <ListGroup.Item action variant="light" onClick={() => filter("All")}>
            NONE
          </ListGroup.Item>
          <ListGroup.Item action variant="light" onClick={() => filter("JP-1200")}>
            Running
          </ListGroup.Item>
          <ListGroup.Item action variant="light" onClick={() => filter("JP-1110")}>
            Indoor
          </ListGroup.Item>
          <ListGroup.Item action variant="light" onClick={() => filter("JP-1000")}>
            Soccer
          </ListGroup.Item>
          <ListGroup.Item action variant="light" onClick={() => filter("JP-1300")} >
          Basketball
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col>
      <StoreContent products={props.products} filter={item}/>
      </Col>
    </Row>
  </Container>
    )
}

export default Shop;
