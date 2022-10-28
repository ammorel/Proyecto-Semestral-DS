import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './estilos.css';

function ColRows() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md>
          <a href="/productos">
            <img src={require("../imgs/lootring1.1.jpg")} height="140" alt=""/>
          </a>
          <h2>LOOT RING</h2>
          <p>Anillos duotono. Disponibles en 3 versiones.</p>
        </Col>
        <Col md>
          <a href="/productos">
            <img src={require("../imgs/wristchain1.1.jpg")} height="140" alt=""/>
          </a>
          <h2>WRIST CHAIN</h2>
          <p>Cadenas para las muñecas con eslabones de 20mm. Disponible en 3 versiones.</p>
        </Col>
        <Col md>
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