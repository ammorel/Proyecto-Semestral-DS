import Paypal from './Paypal';
import { Stack } from "react-bootstrap"
import { useCarrito } from "./ShoppingCartContext.tsx";
import { CartItem } from "./CartItem.tsx";
import storeItems from "./data/items.json";

function Cart() {
    const {cartItems} = useCarrito()
    return (
        <div>
            <Stack gap={3}>
                {cartItems.map(item => (    
                <CartItem key = {item.id} {...item} />
                ))}
                <div className="container">
                    <div className="ms-auto fw-bold fs-5" style={{color:"#FFFFFF"}}>
                        Total{" "}
                        {cartItems.reduce((total, cartItem) => {
                            const item = storeItems.find(i => i.data.id === cartItem.id)
                            return total + (item?.data.precio || 0) * cartItem.cantidad
                            }, 0)
                        }
                    </div>
                </div>
            </Stack>
            
            <div className='paypal-button-container d-flex justify-content-center'>
                <Paypal />
            </div>
        </div>
    );
}

export default Cart;