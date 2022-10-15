import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom"
import { useCarrito } from './Carrito.tsx';
import "./estilos.css"

function NavBarTGL() {
  const { cartQuantity } = useCarrito()
  return (
    <Navbar sticky="top" bg="black" variant="dark" expand="md">
      <Container>
        <Navbar.Brand className="d-md-none" to="/" as={NavLink}>
          <img
            src={require("../imgs/TGL.jpg")}
            height="75"
            className="d-inline-block align-top"
            alt="TGL logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link to="/" as={NavLink}>Inicio</Nav.Link>
            <NavDropdown title="Nosotros" id="basic-nav-dropdown" menuVariant="dark">
              <NavDropdown.Item to="/informacion" as={NavLink}>
                Información
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="/contacto" as={NavLink}>
                Contacto
              </NavDropdown.Item>
            </NavDropdown> 
            <Nav.Link href="https://www.instagram.com/theglasslab.cl/" target="_blank">Instagram</Nav.Link>
            <Navbar.Brand className="d-none d-md-block" to="/" as={NavLink}>
              <img
                src={require("../imgs/TGL.jpg")}
                height="75"
                className="d-inline-block align-top"
                alt="TGL logo"
              />
            </Navbar.Brand>
            <Nav.Link to="/apedido" as={NavLink}>A Pedido</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown" menuVariant="dark">
              <NavDropdown.Item to="/anillos" as={NavLink}>
                Anillos
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="/pulseras" as={NavLink}>
                Pulseras
              </NavDropdown.Item>
            </NavDropdown>
            
              <Nav.Link to="/cart" as={NavLink} style={{position: "relative"}}>
                  <span class="material-symbols-outlined">
                    shopping_cart
                  </span>
                  { cartQuantity > 0 &&( <div className='rounded-circle d-flex justify-content-center align-items-center' style={{color:"white", width:"1.3rem", height:"1.3rem", position:"absolute", bottom:0, right:0, backgroundColor:"#d26941"}}>{ cartQuantity }</div>)}
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarTGL;