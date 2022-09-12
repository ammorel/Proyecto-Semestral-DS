import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './estilos.css';

function ColRows() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md-4>
          <img src={require("../imgs/lootring1.1.jpg")} height="140" alt=""/>
          <h2>LOOT RING</h2>
          <p>Anillos duotono. Disponibles en 3 versiones.</p>
        </Col>
        <Col md-4>
          <img src={require("../imgs/wristchain1.1.jpg")} height="140" alt=""/>
          <h2>WRIST CHAIN</h2>
          <p>Cadenas para las muñecas con eslabones de 20mm. Disponible en 3 versiones.</p>
        </Col>
        <Col md-4>
          <img src={require("../imgs/collar1.jpg")} height="140" alt=""/>
          <h2>A Pedido</h2>
          <p></p>
        </Col>
      </Row>
    </Container>
  );
}

export default ColRows;