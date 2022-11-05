import { Row, Col } from "react-bootstrap"
import { Item } from "./StoreItems.tsx";
import React, { useEffect, useState } from "react";

function Pulseras() {
    const [storeItems, setItems] = useState([]);
    const formio = 'https://hyqizwlialyogdk.form.io/pulseras/submission';
    function pullJson() {
        fetch(formio)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setItems(data);
        })
    }
  
    useEffect(() => {
      pullJson();
  
    }, [])
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

export default Pulseras;