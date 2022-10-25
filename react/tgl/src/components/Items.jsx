import storeItems from "./data/items.json"
import { Row, Col } from "react-bootstrap"
import { Item } from "./StoreItems.tsx";
import React from "react";

function Items() {
    return (
        <div className="container">
            <Row md={2} xs={1} lg={3} className="g-3" style={{ marginBottom: '3rem'}}>
                {storeItems.map(item => (
                    <Col key={item.id}>
                        <Item {...item["data"]}/>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Items;