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
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../imgs/banner2.jpg')}
          alt="Second slide"
        />

        <Carousel.Caption className="text-start">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../imgs/banner3.jpg')}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselTGL;