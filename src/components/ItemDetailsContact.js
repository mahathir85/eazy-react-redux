import React from 'react';
import { Container, Button, Col, Row } from 'react-bootstrap';
import { FaPhoneAlt } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { IoMdChatbubbles } from 'react-icons/io';

function ItemDetailsContact(props){
    return (
        <>
            {/*Display Desktop*/}
            <Container className="d-none d-sm-block ml-3 mb-3">
                <div className="pt-2 pb-2">Interested with the ad? Contact the seller</div>                            
                <Button variant="outline-danger" className="text-left" block><FaPhoneAlt></FaPhoneAlt> {props.dataProps.phone}</Button>
                <Button variant="outline-danger" className="text-left" block><AiOutlineMail></AiOutlineMail> Email</Button>
                <Button variant="outline-danger" className="text-left" block><IoMdChatbubbles></IoMdChatbubbles> Chat</Button>                                
            </Container> 
            {/*Display Mobile*/}
            <Container className="d-block d-sm-none d-none d-lg-none text-center bg-white p-3 shadow-top" fluid>
                <Row>
                    <Col><Button variant="outline-danger p-2" className="text-left"><FaPhoneAlt></FaPhoneAlt> {props.dataProps.phone}</Button></Col>
                    <Col><Button variant="outline-danger" className="text-left"><AiOutlineMail></AiOutlineMail> Email</Button></Col>
                    <Col><Button variant="outline-danger" className="text-left"><IoMdChatbubbles></IoMdChatbubbles> Chat</Button>                                </Col>
                </Row>         
            </Container> 
        </>
    )
}

export default ItemDetailsContact;