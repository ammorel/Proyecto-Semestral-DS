import Figure from 'react-bootstrap/Figure';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import './estilos.css';

function Nosotros() {
  return (
    <>
      <Figure style={{marginTop:'1.5rem'}}>
        <Figure.Image
          width={3800}
          height={450}
          src={require('../imgs/TGL-wide.png')}
        />
        <div className="container">
        <section className='border-top'>
        <Row className="justify-content-evenly" md={3} lg={3} xl={3} sm={3} style={{marginTop:'2rem', marginBottom:'2rem'}}>  
          <Col>
            <Figure.Caption style={{fontFamily: 'Helvetica', color: 'white'}}>
              <h2>Sobre TGL</h2>
              <p style={{fontSize:'16px', textAlign: "justify"}}>Comenzó en 2021 como un proyecto de producción de pipas, luego en 2022 se tranformó en lo que es hoy, un emprendimiento de accesorios de vidrio soplado hechos a mano. Dentro de los productos que se ofrecen hay anillos disponibles en una variedad de colores con detalles en braile. También, hay pulseras conformadas por eslabones de vidrio unidos por una cadena. Por último, existen los proyectos especiales que se realizan por medio de pedidos, los cuales pueden ser otro tipo de accesorios, prendas, etc., dependiendo de tu visión. El motivo de TGL es brindar un nuevo camino hacia el estilo personal único por medio de un material no convencional para accesorios.</p>
            </Figure.Caption>
          </Col>
          <Col>
            <Carousel style={{height:'320px', width:'320px'}}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={require("../imgs/jp.jpg")}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={require('../imgs/cadena2.jpg')}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={require('../imgs/pipa.jpg')}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={require('../imgs/accesorio.jpg')}
                    alt="Fourth slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
      </section>
        </div>
      </Figure>
    </>
  );
}

export default Nosotros;