import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './estilos.css';

function ColRows() {
  return (
    <Container>
      <Row md={2} xs={1} lg={3} className="justify-content-md-center" style={{marginLeft:'2.5rem'}}>
        <Col className='contenido'>
          <Card bg="black" style={{width: '18rem', borderColor:'grey'}}>
            <a className='cartas' href="/anillos">
              <Card.Img variant="bottom" src={require("../imgs/lootring1.jpg")}/>
              <Card.Body>
                <Card.Title><h2>LOOT RING</h2></Card.Title>
                <Card.Text>
                  <p>Anillos duotono. Disponibles en 3 versiones.</p>
                </Card.Text>
              </Card.Body>
            </a>
          </Card>
        </Col>
        <Col className='contenido'>
          <Card bg="black" style={{width: '18rem', borderColor:'grey'}}>
            <a className='cartas' href="/pulseras">
              <Card.Img variant="top" src={require("../imgs/wristchain2.jpg")}/>
              <Card.Body>
                <Card.Title><h2>WRIST CHAIN</h2></Card.Title>
                <Card.Text>
                  <p>Cadenas para las muñecas con eslabones de 20mm. Disponible en 3 versiones.</p>
                </Card.Text>
              </Card.Body>
            </a>
          </Card>
        </Col>
        <Col className='contenido'>
          <Card bg="black" style={{width: '18rem', borderColor:'grey'}}>
            <a className='cartas' href="/apedido">
              <Card.Img variant="top" src={require("../imgs/collar1.jpg")}/>
              <Card.Body>
                <Card.Title><h2>A PEDIDO</h2></Card.Title>
                <Card.Text>
                  <p>Danos tu idea de anillo, pulsera u otro accesesorio y lo hacemos.</p>
                </Card.Text>
              </Card.Body>
            </a>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ColRows;