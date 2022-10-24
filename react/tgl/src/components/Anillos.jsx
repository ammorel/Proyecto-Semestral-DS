import storeAnillos from "./data/anillos.json"
import { Row, Col } from "react-bootstrap"
import { Anillo } from "./StoreAnillos.tsx";
import React from "react";

function Anillos() {
    return (
        <div className="container">
            <Row md={2} xs={1} lg={3} className="g-3" style={{ marginBottom: '3rem'}}>
                {storeAnillos.map(item => (
                    <Col key={item.id}>
                        <Anillo {...item["data"]}/>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Anillos;