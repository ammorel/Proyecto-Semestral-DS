// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { NavBarLink1 } from './NavBarLink1';

// export const NavBarTGL = () => {
//   return (
//     <Navbar bg="light" expand="lg">
//     <Container>
//       <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="me-auto">
//           <Nav.Link href="#home">Home</Nav.Link>
//           <Nav.Link href="#link">Link</Nav.Link>
//           <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//             <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//             <NavDropdown.Item href="#action/3.2">
//               Another action
//             </NavDropdown.Item>
//             <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//             <NavDropdown.Divider />
//             <NavDropdown.Item href="#action/3.4">
//               Separated link
//             </NavDropdown.Item>
//           </NavDropdown>
//           <Nav.Link href="#link">
//             <NavBarLink1 />
//           </Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Container>
//   </Navbar>
//   )
// }

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './estilos.css';

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
            <Nav.Link href="#home" active>Inicio</Nav.Link>
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