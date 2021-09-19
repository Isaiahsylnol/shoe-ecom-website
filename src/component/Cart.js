import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Cart = () => {
    
    return(
        <div id="cart-view">
            <Link to="/cart">
                <Button variant="primary">Checkout</Button>{' '}
            </Link>
        </div>
    )
}

export default Cart;

