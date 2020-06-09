import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ItemCard from './ItemCard';

const getItemCards = (item) =>{
    return(
        item && item.map(item => 
            <Col key={item.id} bsPrefix="d-flex align-items-stretch pb-4">            
                <ItemCard data={item}></ItemCard>
            </Col>
        )
    )
}

function ItemSimilarList(props){
    return (
        <Container className="bg-white">
            <Row><Col><h5 className="card-item-listing-title">Similar</h5></Col></Row>            
            <Row xs={2} md={4} lg={6}>
                {getItemCards(props.dataProps)}                    
            </Row>
        </Container>
    );
}

export default ItemSimilarList;