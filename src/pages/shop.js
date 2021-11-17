import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';

function Shop(props) {

    function alertClicked() {
        alert('You clicked the third ListGroupItem');
      }

  return (
    <div class="container">
      <div class="row">
        <div class="col-">
        <ListGroup defaultActiveKey="#link1">
    <ListGroup.Item action href="#link1">
      Lifestyle
    </ListGroup.Item>
    <ListGroup.Item action href="#link2">
      Basketball
    </ListGroup.Item>
    <ListGroup.Item action href="#link3">
      Running
    </ListGroup.Item>
    <ListGroup.Item action href="#link4">
      Indoor
    </ListGroup.Item>
    <ListGroup.Item action href="#link5">
      Soccer
    </ListGroup.Item>
    <ListGroup.Item action href="#link6" onClick={alertClicked}>
      Golf
    </ListGroup.Item>
  </ListGroup>
        </div>
        <div class="col-sm">One of two columns</div>
      </div>
    </div>
  );
}

export default Shop;
