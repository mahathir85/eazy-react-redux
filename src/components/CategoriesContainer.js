import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaListAlt } from 'react-icons/fa';

function CategoriesContainer() {
    return (
        <Container className="py-5">
            <Row className="justify-content-md-center">
                <Col xs lg="6">
                    <h3 className="text-info"> <FaListAlt size="3em"></FaListAlt> Categories</h3>
                </Col>
            </Row>
        </Container>
    );
}

export default CategoriesContainer; 