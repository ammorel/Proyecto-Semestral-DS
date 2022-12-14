import { useCarrito } from "./ShoppingCartContext.tsx";
import { Stack } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from "react";
import { formatCurrency } from "./formatCurrency.ts"

type CartItemProps = {
    id: number,
    cantidad: number,
}

export function CartPulseras({ id, cantidad}: CartItemProps) {
    const { removeFromCart } = useCarrito()
    const [storeItems, setItems] = useState([]);
    const formio = 'https://hyqizwlialyogdk.form.io/pulseras/submission';
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
    
    const item = storeItems.find(i => i.data.id === id)
    if (item == null) return null

    return (
        <div className="container">
            <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
                <img src={item.data.imagen} alt="" style={{ width: "200px", height: "130px", objectFit: "cover" }}/>
                <div className="me-auto">
                    <div style={{ fontSize: "1.5rem" , color:"#FFFFFF"}}>
                        {item.data.nombre}{" "}
                        {cantidad > 1 && (
                        <span className="text-muted" style={{ fontSize: "1rem" }}>
                            x{cantidad}
                        </span>
                        )}
                    </div>
                    <div style={{ fontSize: "1.2rem" , color:"#FFFFFF"}}>
                        {formatCurrency(item.data.precio * 1000)}
                    </div>
                </div>

                <div style={{ fontSize: "1rem", color:"#FFFFFF"}}> {formatCurrency(item.data.precio * cantidad * 1000)}</div>

                <Button size="sm" style={{backgroundColor:"#d26941", borderColor:"#d26941"}} onClick={() => removeFromCart(item.data.id)}>
                    &times;
                </Button>
            </Stack>
        </div>
    )
}