import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Cart = () => {

    function testClick() {
        console.log("the button works");
    };
    
    return(
        <div id="cart-view">
            <Link to="/cart">
                <Button variant="primary">Primary</Button>{' '}
            </Link>
        </div>
    )
}

export default Cart;