import Carousel from 'react-bootstrap/Carousel';
import './estilos.css';

function CarouselTGL() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../imgs/banner1.jpg')}
          alt="First slide"
        />
        <Carousel.Caption className="text-end">
          <h3>NUEVA COLECCIÓN</h3>
          <p>Loot Ring y Wrist Chain en variedades de colores.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../imgs/banner2.jpg')}
          alt="Second slide"
        />

        <Carousel.Caption className="text-start">
          <h3>Revisa nuestra disponibilidad de tallas</h3>
          <h3>en pulseras y anillos.</h3>
        </Carousel.Caption>
      </Carousel.Item>
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
    </Carousel>
  );
}

export default CarouselTGL;