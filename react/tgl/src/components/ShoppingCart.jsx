import Paypal from './Paypal';
import { Stack } from "react-bootstrap"
import { useCarrito } from "./ShoppingCartContext.tsx";
import { CartAnillos } from "./CartAnillos.tsx";
import { CartPulseras } from "./CartPulseras.tsx";
import React, { useEffect, useState } from "react";

function Cart() {
    const {cartItems} = useCarrito()

    const [storePulseras, setPulseras] = useState([]);
    const formioPulseras = 'https://hyqizwlialyogdk.form.io/items/submission';

    function pullJson() {
        fetch(formioPulseras)
        .then(response => response.json())
        .then(data => {
            setPulseras(data);
        })
    }
  
    useEffect(() => {
      pullJson();
  
    }, [])

    // const [precio, setPrecio] = useState([]);

    // useEffect (() => {
    //     console.log(cartItems.reduce((total, cartItem) => {
    //         const item = storePulseras.find(i => i.data.id === cartItem.id)
    //         return total + (item?.data.precio || 0) * cartItem.cantidad * 1000
    //         }, 0))
    //     setPrecio(cartItems.reduce((total, cartItem) => {
    //         const item = storePulseras.find(i => i.data.id === cartItem.id)
    //         return total + (item?.data.precio || 0) * cartItem.cantidad * 1000
    //         }, 0))
    // }, [cartItems, storePulseras])

    const product = {
        description: 'The Glass Lab',
        price: 47000/926
        
    }

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
                        Total{" "}
                        {cartItems.reduce((total, cartItem) => {
                            const item = storePulseras.find(i => i.data.id === cartItem.id)
                            return total + (item?.data.precio || 0) * cartItem.cantidad * 1000
                            }, 0)
                        }
                    </div>
            </Stack>
        </div>
            
            <div className='paypal-button-container d-flex justify-content-center'>
                <Paypal product={product}/>
            </div>
        </div>
    );
}

export default Cart;