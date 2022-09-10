import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import Image from 'react-bootstrap/Image';
// import slide1 from '../imgs/banner1.jpg';
// import slide2 from '../imgs/banner2.jpg';
// import slide3 from '../imgs/banner3.jpg';

import Carousel from 'react-bootstrap/Carousel';

function CarouselTGL() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../imgs/banner1.jpg')}
          alt="First slide"
        />
        <Carousel.Caption>
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

        <Carousel.Caption>
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

// export const CarouselTGL = () => {
//   return (
//     <Carousel>
//     <Carousel.Item>
//       <Image
//         className="d-block w-100"
//         src={slide1}
//         alt="First slide"
//       />
//       <Carousel.Caption>
//         <h3>First slide label</h3>
//         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//       </Carousel.Caption>
//     </Carousel.Item>
//     <Carousel.Item>
//       <img
//         className="d-block w-100"
//         src={slide2}
//         alt="Second slide"
//       />

//       <Carousel.Caption>
//         <h3>Second slide label</h3>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//       </Carousel.Caption>
//     </Carousel.Item>
//     <Carousel.Item>
//       <img
//         className="d-block w-100"
//         src={slide3}
//         alt="Third slide"
//       />

//       <Carousel.Caption>
//         <h3>Third slide label</h3>
//         <p>
//           Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//         </p>
//       </Carousel.Caption>
//     </Carousel.Item>
//   </Carousel>
//   )
// }