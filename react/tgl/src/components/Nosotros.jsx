import Figure from 'react-bootstrap/Figure';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MDBIcon } from 'mdb-react-ui-kit';
import './estilos.css';

function Nosotros() {
  return (
    <>
        <Figure>
      <Figure.Image
        width={3800}
        height={450}
        src={require('../imgs/TGL-wide.png')}
      />
      <div className="container">
        <Figure.Caption style={{fontFamily: 'Helvetica', color: 'white'}}>
          <h2>Sobre TGL</h2>
          <p>Comenzó en 2021 como un proyecto de producción de pipas, luego en 2022 se tranformó en lo que es hoy, un emprendimiento de accesorios de vidrio soplado hechos a mano. Dentro de los productos que se ofrecen hay anillos disponibles en una variedad de colores con detalles en braile. También, hay pulseras conformadas por eslabones de vidrio unidos por una cadena. Por último, existen los proyectos especiales que se realizan por medio de pedidos. </p>
        </Figure.Caption>
      </div>
    </Figure>
    <div className="container">
      <section className='border-top'>
          <Row className="justify-content-md-center">
            <Col md className='contacto'>
              <h2>Contacto</h2>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 89
              </p>
            </Col>
            <Col md>
              <img src={require("../imgs/logo_lleno.jpg")} height="300" alt=""/>
            </Col>
          </Row>
      </section>
    </div>
    </>
  );
}

export default Nosotros;