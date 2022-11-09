import Carousel from 'react-bootstrap/Carousel';
import './estilos.css';

function CarouselTGL() {
  return (
    <Carousel>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../imgs/banner3.jpg')}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>NUEVA COLECCIÓN</h3>
          <p>
            Loot Ring y Wrist Chain en variedades de colores.
          </p>
        </Carousel.Caption>
      </Carousel.Item>      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../imgs/slide1.jpg')}
          alt="First slide"
        />   
        <Carousel.Caption className="text-start" style={{top: '35%'}}>
          <span style={{backgroundColor:"black", fontSize:"1.7rem"}}>REVISA NUESTRO CATÁLOGO</span><br></br>
          <span style={{backgroundColor:"black", fontSize:"1.5rem"}}>de pulseras y anillos.</span>
        </Carousel.Caption>

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../imgs/slide3.jpg')}
          alt="Second slide"
        />
        <Carousel.Caption className="text-end" style={{top: '35%'}}>
          <h3>COMPLETA TU LOOK</h3>
          <h4>con un toque de vidrio.</h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselTGL;