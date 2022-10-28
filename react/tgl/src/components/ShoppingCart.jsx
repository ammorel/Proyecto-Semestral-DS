import Paypal from './Paypal';
import { Stack } from "react-bootstrap"
import { useCarrito } from "./ShoppingCartContext.tsx";
import { CartItem } from "./CartItem.tsx";
import React, { useEffect, useState } from "react";

function Cart() {
    const {cartItems} = useCarrito()
    const [storeItems, setItems] = useState([]);
    const formio = 'https://hyqizwlialyogdk.form.io/items/submission';
    function pullJson() {
        fetch(formio)
        .then(response => response.json())
        .then(data => {
            setItems(data);
        })
    }
  
    useEffect(() => {
      pullJson();
  
    }, [])
    return (
        <div>
            <Stack gap={3}>
                {cartItems.map(item => (    
                <CartItem key = {item.id} {...item} />
                ))}
                <div className="container">
                    <div className="ms-auto fw-bold fs-5" style={{color:"#FFFFFF", textAlign:"right"}}>
                        Total{" "}
                        {cartItems.reduce((total, cartItem) => {
                            const item = storeItems.find(i => i.data.id === cartItem.id)
                            return total + (item?.data.precio || 0) * cartItem.cantidad * 1000
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