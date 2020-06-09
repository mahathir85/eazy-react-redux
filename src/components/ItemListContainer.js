import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ItemList from './ItemList';

function ItemListContainer() {
    return (
        <Container fluid className="default-container">
            <Row>
                <Col sm={1}></Col>
                <Col sm={10}>
                    <ItemList></ItemList>
                </Col>
                <Col sm={1}></Col>
            </Row>
        </Container>        
    );
}

export default ItemListContainer;