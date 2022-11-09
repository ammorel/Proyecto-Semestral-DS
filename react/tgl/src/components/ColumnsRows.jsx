import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './estilos.css';

// function BasicExample() {
//   return (
//     <Container>
//       <div className='contenido'>
//         <Stack direction="horizontal" gap={5}>
//           <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src="holder.js/100px180" />
//             <Card.Body>
//               <Card.Title>Card Title</Card.Title>
//               <Card.Text>
//                 Some quick example text to build on the card title and make up the
//                 bulk of the card's content.
//               </Card.Text>
//               <Button variant="primary">Go somewhere</Button>
//             </Card.Body>
//           </Card>
//           <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src="holder.js/100px180" />
//             <Card.Body>
//               <Card.Title>Card Title</Card.Title>
//               <Card.Text>
//                 Some quick example text to build on the card title and make up the
//                 bulk of the card's content.
//               </Card.Text>
//               <Button variant="primary">Go somewhere</Button>
//             </Card.Body>
//           </Card>
//         </Stack>
//       </div>
//     </Container>

//   );
// }

// export default BasicExample;

function ColRows() {
  return (
    <Container>
      <Row md={2} xs={1} lg={3} className="justify-content-md-center">
        <Col className='contenido'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="bottom" src={require("../imgs/lootring1.1.jpg")} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <a href="/anillos">
            <img src={require("../imgs/lootring1.1.jpg")} height="140" alt=""/>
          </a>
          <h2>LOOT RING</h2>
          <p>Anillos duotono. Disponibles en 3 versiones.</p>
        </Col>
        <Col className='contenido'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button>Go somewhere</Button>
            </Card.Body>
          </Card>
          <a href="/pulseras">
            <img src={require("../imgs/wristchain1.1.jpg")} height="140" alt=""/>
          </a>
          <h2>WRIST CHAIN</h2>
          <p>Cadenas para las muñecas con eslabones de 20mm. Disponible en 3 versiones.</p>
        </Col>
        <Col className='contenido'>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button>Go somewhere</Button>
            </Card.Body>
          </Card>
          <a href="/apedido">
            <img src={require("../imgs/collar1.jpg")} height="140" alt=""/>
          </a>
          <h2>A PEDIDO</h2>
          <p>Danos tu idea de anillo, pulsera u otro accesesorio y lo hacemos.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default ColRows;