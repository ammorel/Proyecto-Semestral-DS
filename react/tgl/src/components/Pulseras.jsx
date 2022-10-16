import storePulseras from ".//data/items.json"
import { Row, Col } from "react-bootstrap"
import { Pulsera } from "./StorePulseras.tsx";

function Pulseras() {
    return (
        <><h1>Pulseras de la tienda</h1>
        <Row md={2} xs={1} lg={3} className="g-3">
            {storePulseras.map(item => (
                <Col key={item.id}>
                    <Pulsera {...item["data"]}/>
                </Col>    
            ))}
            
        </Row></>
    );
}

export default Pulseras;