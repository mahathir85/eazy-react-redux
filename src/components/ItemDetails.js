import React from 'react';
import { Container, Col, Row, Breadcrumb } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import ItemDetailsContact from './ItemDetailsContact';
import ItemDetailsFull from './ItemDetailsFull';
import logoDetails from '../assets/nintendo.png';


function ItemDetails(props) {    
    return (
        <Container fluid className="mt-3 border rounded default-component-container" >
            <Row className="d-none d-lg-block">
                <Col>
                    <Breadcrumb className="item-breadcrumb">
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Electronics</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Game & Console</Breadcrumb.Item>
                        <Breadcrumb.Item active>{props.dataProps.title}</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h5>{props.dataProps.title}</h5>
                </Col>               
                <Col className="d-none d-lg-block">
                </Col>                                         
            </Row>
            {/*Display Mobile*/}
            <Row className="d-block d-sm-none d-none d-lg-none">
                <Col>
                    <Container className="border">                       
                        <Row>
                            <Col>
                                <LazyLoadImage src={logoDetails} alt="logo118" effect="blur"/>                                
                            </Col>
                        </Row>
                        <Row className="border-top">                
                            <Col>
                                <ItemDetailsFull dataProps={props.dataProps}></ItemDetailsFull>
                            </Col>            
                        </Row>
                        <Row className="border-top pb-2 fixed-bottom">
                            <Col>                           
                                 <ItemDetailsContact dataProps={props.dataProps}></ItemDetailsContact>                                   
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            {/*Display Desktop*/}
            <Row>
                <Col className="border d-none d-sm-block ml-3 mb-3">
                    <Container className="text-center">                       
                        <Row>
                            <Col>                                
                                <LazyLoadImage src={logoDetails} alt="logo118" effect="blur" wrapperClassName="img-fluid"/>                                
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col className="d-none d-sm-block mb-3">
                    <Container>
                        <Row className="border">                
                            <Col>
                                <ItemDetailsFull dataProps={props.dataProps}></ItemDetailsFull>
                            </Col>            
                        </Row>
                        <Row className="border pb-2">
                            <Col>                           
                                 <ItemDetailsContact dataProps={props.dataProps}></ItemDetailsContact>                                   
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>          
        </Container>
    );
}

export default ItemDetails;