import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './estilos.css';
import { NavLink } from "react-router-dom"

function NavBarTGL() {
  return (
    <Navbar bg="black" variant="dark" expand="md">
      <Container>
        <Navbar.Brand className="d-md-none" href="#home">
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
            <Nav.Link href="https://www.instagram.com/theglasslab.cl/" target="_blank" active >Instagram</Nav.Link>
            <Navbar.Brand className="d-none d-md-block" href="#home">
              <img
                src={require("../imgs/TGL.jpg")}
                height="75"
                className="d-inline-block align-top"
                alt="TGL logo"
              />
            </Navbar.Brand>
            <Nav.Link href="#home" active>A Pedido</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown" menuVariant="dark" active>
              <NavDropdown.Item href="#action/3.1">Pulseras</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Anillos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarTGL;