import React, { useEffect } from 'react';
import { Container, Row, Col, Spinner} from 'react-bootstrap';
import { MdErrorOutline } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItemDetail, fetchItemSimilar, setIsloadedState } from '../redux';

import ItemDetails from '../components/ItemDetails';
import ItemSimilarList from '../components/ItemSimilarList';

const getItemSimilar = (itemSimilar) => {
    if(itemSimilar && itemSimilar.similar && itemSimilar.similar.data){        
        return(
            <ItemSimilarList dataProps={itemSimilar.similar.data}></ItemSimilarList>            
        )
    }
}

const getItemDetails = (itemDetail) => {
    if(itemDetail && itemDetail.details && itemDetail.details.data){        
        return(
            <ItemDetails dataProps={itemDetail.details.data.attributes}></ItemDetails>            
        )
    }    
}

function ItemDetailsContainer({ match }) {    
    const item = useSelector(state => state.item); 
    const itemDetail = useSelector(state => state.itemDetail);
    const itemSimilar = useSelector(state => state.itemSimilar);
    const dispatch = useDispatch();   
    
    useEffect( () => {                
        const filter = match.params.filter.replace('.html', '');        
        dispatch(fetchItemDetail(filter, item));
        dispatch(fetchItemSimilar(filter));
        dispatch(setIsloadedState());
    },[]);    

    return (
        <Container fluid className="default-container">
            <Row>
                <Col sm={1}></Col>
                <Col sm={10}>
                    <Container>
                        <Row>
                            <Col>

                                {
                                    itemDetail.loading ? (
                                        <Container className="pt-5">
                                            <Row className="justify-content-md-center">
                                                <Col xs lg="3">
                                                    <Spinner animation="border" className="text-danger" /> <span>Loading details...</span>
                                                </Col>
                                            </Row>
                                        </Container>
                                        
                                    ) 
                                    :   itemDetail.error != '' ? (
                                        <Container className="py-5">
                                            <Row className="justify-content-md-center">
                                                <Col xs lg="4">
                                                     <h3 className="text-warning"> <MdErrorOutline size="3em"></MdErrorOutline> Item Not Found!!</h3>
                                                </Col>
                                            </Row>
                                        </Container>
                                        ) : getItemDetails(itemDetail)
                                }                                
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                {
                                    itemSimilar.loading ? (
                                        <Container className="py-5">
                                            <Row className="justify-content-md-center">
                                                <Col xs lg="3">
                                                    <Spinner animation="border" className="text-danger" /> Loading similar items...
                                                </Col>
                                            </Row>
                                        </Container>    
                                    ) 
                                    : getItemSimilar(itemSimilar)
                                }
                            </Col>
                        </Row>
                    </Container>                                    
                </Col>
                <Col sm={1}></Col>
            </Row>
        </Container>        
    )
}

export default ItemDetailsContainer;