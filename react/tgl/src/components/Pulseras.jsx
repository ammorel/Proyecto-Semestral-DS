import storePulseras from ".//data/pulseras.json"
import { Row, Col } from "react-bootstrap"
import { Pulsera } from "./StorePulseras.tsx";

function Pulseras() {
    return (
        <div className="container">
            <Row md={2} xs={1} lg={3} className="g-3" style={{ marginBottom: '3rem'}}>
                {storePulseras.map(item => (
                    <Col key={item.id}>
                        <Pulsera {...item["data"]}/>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Pulseras;