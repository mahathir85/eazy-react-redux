import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';

function LoginContainer() {
    return (
        <Container className="py-5">
            <Row className="justify-content-md-center">
                <Col xs lg="6">
                    <h3 className="text-info"> <FaUserCircle size="3em"></FaUserCircle> Login / Signup</h3>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginContainer;