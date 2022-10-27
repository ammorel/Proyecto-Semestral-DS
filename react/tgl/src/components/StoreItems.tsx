import React from "react"
import { Button, Card } from "react-bootstrap"
import { useCarrito } from "./ShoppingCartContext.tsx"

type ItemProps = {
    id: number
    nombre: string
    precio: number
    imagen: string
}

export function Item({id, nombre, precio, imagen} : 
ItemProps) {
    const { getItemQuantity, increaseItemQuantity, decreaseItemQuantity, removeFromCart } = useCarrito()
    const cantidad = getItemQuantity(id)
    return <Card className="bg-dark h-100" style={{ backgroundColor: "#000000"}}>
                <Card.Img variant="top" src={imagen} height="300px" style={{objectFit: "cover"}}>
                </Card.Img>
                <Card.Body className="d-flex flex-column">
                    <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                        <span className="fs-2" style={{color:"#FFFFFF"}}>{nombre}</span>
                        <span className="ms-2 text-muted">{precio}</span>
                    </Card.Title>
                    <div className="mt-auto">
                        {cantidad === 0 ? (
                            <Button onClick={() => increaseItemQuantity(id)}>+ Agregar al carrito</Button>
                        ):<div className="d-flex align-items-center flex-column text-muted" style={{ gap: ".5rem", color: "#FFFFFF"}}><div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem"}}>
                                <Button onClick={() => decreaseItemQuantity(id)}>-</Button><div><span className="fs-5 text-muted" style={{color: "#FFFFFF"}}>{cantidad} </span>en el carrito</div><Button onClick={() => increaseItemQuantity(id)}>+</Button>
                            </div><Button size="sm" onClick={() => removeFromCart(id)}>Eliminar</Button></div>}
                    </div>
                </Card.Body>
            </Card>        
}