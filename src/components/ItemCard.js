import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Card } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import logo118 from '../assets/thumbnail/image1188.png';
import logo1300 from '../assets/thumbnail/image1300.png';
import logo1200 from '../assets/thumbnail/image1200.png';

import { fetchItemDetail, fetchItemSimilar, setIsloadedState } from '../redux';

const getImageCard = (price) => {
    switch(price){
        case 'RM 1,289':
            return (                
                <LazyLoadImage src={logo118} alt="logo118" effect="blur" wrapperClassName="text-center pt-2"/>
            );
        case 'RM 1,200':
            return (                
                <LazyLoadImage src={logo1200} alt="logo1200" effect="blur" wrapperClassName="text-center pt-2"/>
            );
        default:
            return (
                <LazyLoadImage src={logo1300}alt="logo1300" effect="blur" wrapperClassName="text-center pt-2"/>
            );
    }
}

function ItemCard(props, {match}) {
    const item = useSelector(state => state.item); 
    const history = useHistory();
    const dispatch = useDispatch();

    const routeChange = () =>{                                
        switch(props.data.type){
            case 'similar_item':
                dispatch(setIsloadedState());
                dispatch(fetchItemDetail(props.data.id, item));
                dispatch(fetchItemSimilar(props.data.id));                
                window.scrollTo(0, 0);
                return history.push(props.data.attributes.href);                                
            default:                        
                return history.push(props.data.attributes.links.self);             
        }
    }


    return (
        <Card className="mx-auto card-item card-item-container" onClick={routeChange}>            
            {
                getImageCard(props.data.attributes.price)
            }
            <Card.Body>
                <Card.Title className="card-item-title">{props.data.attributes.title}</Card.Title>
                <Card.Text className="text-danger font-weight-bold card-item-price">{props.data.attributes.price}</Card.Text>
            </Card.Body>
        </Card>
    ); 
}

export default ItemCard;