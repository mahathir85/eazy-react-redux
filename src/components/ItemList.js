import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Col, Row, Spinner } from 'react-bootstrap';

import ItemCard from './ItemCard';
import { fetchItems } from '../redux';

const getItemCards = (item) => {
    return(
        item && item.items && item.items.data && item.items.data.map(item =>             
            <Col key={item.id} bsPrefix="d-flex align-items-stretch pb-4">            
                <ItemCard data={item}></ItemCard>
            </Col>
        )
    )
}

function ItemList() {    
    const item = useSelector(state => state.item); 
    const dispatch = useDispatch();

    useEffect( () => {
        if(!item.isLoaded)
            dispatch(fetchItems());
    }, [])
    
    return item.loading ? (
        <Container className="py-5">
            <Row className="justify-content-md-center">
                <Col xs lg="3">
                    <Spinner animation="border" className="text-danger" /> <span>Loading list...</span>
                </Col>
            </Row>
        </Container>
        
    ) : item.errorMsg ? (
        <h2 className="error-heading">{item.errorMsg}</h2>
    ) : (        
        <Container fluid className="mt-3 border rounded default-component-container">
            <Row><Col><h5 className="card-item-listing-title">Listing</h5></Col></Row>            
            <Row xs={2} md={4} lg={6}>
                {getItemCards(item)}                    
            </Row>
        </Container>
        
    );
}

export default ItemList;