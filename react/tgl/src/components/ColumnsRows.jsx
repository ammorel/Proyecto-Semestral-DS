import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './estilos.css';

function ColRows() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md>
          <img src={require("../imgs/lootring1.1.jpg")} height="140" alt=""/>
          <h2>Heading</h2>
          <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
        </Col>
        <Col md>
          <img src={require("../imgs/wristchain1.1.jpg")} height="140" alt=""/>
          <h2>Heading</h2>
          <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
        </Col>
        <Col md>
          <img src={require("../imgs/collar1.jpg")} height="140" alt=""/>
          <h2>Heading</h2>
          <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default ColRows;