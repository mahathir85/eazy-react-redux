import React from 'react';
import { Container, Col, Row} from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai';

function ItemDetailsFull(props){
    return (
        <Container>
            <Row>
                <Col>
                    <Container>
                        <Row>
                            <Col>
                                <AiOutlineHeart className="text-muted" size="1.5em"></AiOutlineHeart> <small className="text-muted">Wishlist</small>
                            </Col>
                            <Col>
                                <AiOutlineShareAlt className="text-muted" size="1.5em"></AiOutlineShareAlt> <small className="text-muted">Share</small>
                            </Col>
                        </Row>
                    </Container>                                                                                                                
                </Col>
            </Row>
            <Row>
                <Col>  
                    <small className="text-muted">Price </small>                                          
                    <p className="text-danger font-weight-bolder">{props.dataProps.price}</p>    
                </Col>
            </Row>
            <Row>
                <Col>
                    <small className="text-muted">Item condition</small>
                    <p>{props.dataProps.condition}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <small className="text-muted">Item location</small>
                    <p>{props.dataProps.location}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                <small className="text-muted">Seller Info</small>    
                </Col>
            </Row>
            <Row className="pb-2">
                <Col>                                                                                                               
                    <Container className="mt-2">
                        <Row>
                            <Col sm="{1}">                                                                                                                                     
                                <FaUserCircle className="text-muted" size="2em"></FaUserCircle>
                            </Col>
                            <Col>
                                <Container>
                                    <Row>
                                        <Col>{props.dataProps.seller_name}</Col>                                                                            
                                    </Row>
                                    <Row>
                                        <Col>{props.dataProps.seller_type}</Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                    
                </Col>
            </Row>
        </Container>
    );
}

export default ItemDetailsFull;