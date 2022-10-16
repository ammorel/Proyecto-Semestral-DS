import storeAnillos from ".//data/anillos.json"
import { Row, Col } from "react-bootstrap"
import { Anillo } from "./StoreAnillos.tsx";

function Anillos() {
    return (
        <><h1>Anillos de la tienda</h1>
        <Row md={2} xs={1} lg={3} className="g-3">
            {storeAnillos.map(item => (
                <Col key={item.id}>
                    <Anillo {...item["data"]}/>
                </Col>    
            ))}
            
        </Row></>
    );
}

export default Anillos;