import Paypal from './Paypal';
import { Stack } from "react-bootstrap"
import { useCarrito } from "./Carrito.tsx";
import { CartItem } from "./CartItem.tsx";

function Cart() {
    const {cartItems} = useCarrito()
    return (
        <div>
            <Stack gap={3}>
                {cartItems.map(item => ( 
                <CartItem key = {item.id} {...item} />
                ))}
            </Stack>
            
            <div className='paypal-button-container d-flex justify-content-center'>
                <Paypal />
            </div>
        </div>
    );
}

export default Cart;