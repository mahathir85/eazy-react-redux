import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaQuestionCircle } from 'react-icons/fa';

function HelpContainer() {
    return (
        <Container className="py-5">
            <Row className="justify-content-md-center">
                <Col xs lg="6">
                    <h3 className="text-info"> <FaQuestionCircle size="3em"></FaQuestionCircle> Help</h3>
                </Col>
            </Row>
        </Container>
    );
}

export default HelpContainer;