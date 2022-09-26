import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { NavLink } from "react-router-dom"

function APedido() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container">
        <Form>
        <Form.Group className="mb-3" controlId="formPedido">
          <Form.Label>Nombre Completo</Form.Label>
          <Form.Control type="name" placeholder="Ingrese su nombre completo" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPedido">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control type="email" placeholder="Ingrese su correo electrónico" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPedido">
            <Form.Label>Cuéntanos sobre el accesorio que quieres pedir</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Descripción de accesorio a pedir"/>
        </Form.Group>  
        
        </Form>
        <Button type="submit" onClick={handleShow}>
            Pedir
        </Button> 
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
          <Modal.Header>
            <Modal.Title>Pedido confirmado</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Gracias por confiar y pedir el accesorio con nosotros, nos pondremos en contacto contigo lo más pronto posible.
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" to="/" as={NavLink}>Volver a la pantalla de Inicio</Button>
          </Modal.Footer>
        </Modal>
    </div>
  );
}

export default APedido;