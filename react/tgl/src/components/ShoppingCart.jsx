import Paypal from './Paypal';
import { Stack } from "react-bootstrap"
import { useCarrito } from "./ShoppingCartContext.tsx";
import { CartAnillos } from "./CartAnillos.tsx";
import { CartPulseras } from "./CartPulseras.tsx";
import React, { useEffect, useState } from "react";
import { formatCurrency } from "./formatCurrency.ts"

function Cart() {
    const {cartItems} = useCarrito()

    const [storeItems, setItems] = useState([]);
    const formioItems = 'https://hyqizwlialyogdk.form.io/items/submission';

    function pullJson() {
        fetch(formioItems)
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
            <div className="container" style={{marginBottom: '1.5rem'}}>
            <h2 style={{color:"#FFFFFF", marginBottom: '2.5rem'}}>Carrito de Compras</h2>
            <Stack gap={3} style={{marginBottom: '1rem'}}>
                {cartItems.map(item => (    
                <CartAnillos key = {item.id} {...item} />
                ))}
            </Stack>
            <Stack gap={3}>
                {cartItems.map(item => (    
                <CartPulseras key = {item.id} {...item} />
                ))}
                    <div className="ms-auto fw-bold fs-5" style={{color:"#FFFFFF", textAlign:"right"}}>
                        Total {" "}
                        {formatCurrency(cartItems.reduce((total, cartItem) => {
                            const item = storeItems.find(i => i.data.id === cartItem.id)
                            return total + (item?.data.precio || 0) * cartItem.cantidad * 1000
                            }, 0)
                        )}

                    </div>
            </Stack>
            </div>
            <div className='paypal-button-container d-flex justify-content-center'>
                <Paypal/>
            </div>
        </div>
    );
}

export default Cart;