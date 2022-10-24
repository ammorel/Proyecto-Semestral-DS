import { useCarrito } from "./Carrito.tsx";
import storeAnillos from "./data/anillos.json"
import { Stack } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

type CartItemProps = {
    id: number,
    cantidad: number
}

export function CartItem({ id, quantity}: CartItemProps) {
    const { removeFromCart } = useCarrito()
    
    const item = storeAnillos.find(i => i.id === id)
    if (item == null) return null

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img src={item.imagen} style={{ width:"125px", height:"75px", objectFit:"cover"}} alt="imagen producto"/>
        
            <div className="me-auto">
                <div>
                    {item.nombre}{" "} 
                    {cantidad > 1 && (
                        <span className="text-muted" style={{ fontSize: ".65rem" }}>
                            x{cantidad}
                        </span>
                    )}
                </div>
                <div className="text-muted" style={{ fontSize:".75rem"}}>
                    {item.precio}
                </div>
            </div>
            <Button variant='outline-danger' size='sm' onClick={() => removeFromCart(item.id)}>&times;</Button>
        </Stack>
    )
}