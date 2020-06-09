import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MdNotificationsActive } from 'react-icons/md';

function NotificationContainer() {
    return (
        <Container className="py-5">
            <Row className="justify-content-md-center">
                <Col xs lg="6">
                    <h3 className="text-info"> <MdNotificationsActive size="3em"></MdNotificationsActive> Notification</h3>
                </Col>
            </Row>
        </Container>
    );
}

export default NotificationContainer;