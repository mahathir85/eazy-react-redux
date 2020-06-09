import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import { MdErrorOutline } from 'react-icons/md';

import NavigationBar from './NavigationBar';

import ItemListContainer from '../components/ItemListContainer';
import NotificatioinContainer from '../components/NotificationContainer';
import LoginContainer from '../components/LoginContainer';
import HelpContainer from '../components/HelpContainer';
import CategoriesContainer from '../components/CategoriesContainer';
import ItemDetailsContainer from '../components/ItemDetailsContainer';

const NoMatchPage = () => {
    return (
        <Container className="py-5">
            <Row className="justify-content-md-center">
                <Col xs lg="6">
                    <h3 className="text-info"> <MdErrorOutline size="3em"></MdErrorOutline> 404 Page not found...</h3>
                </Col>
            </Row>
        </Container>
    );
};

const DefaultLayout = (props) => {    
    return (
        <React.Fragment>
            <Router>
                <NavigationBar></NavigationBar>
                <Switch>
                    <Route path="/" exact component={ItemListContainer}/>
                    <Route path="/notification" component={NotificatioinContainer}/>
                    <Route path="/categories" component={CategoriesContainer}/>
                    <Route path="/help" component={HelpContainer}/>
                    <Route path="/login" component={LoginContainer}/>
                    <Route path="/view/:filter" component={ItemDetailsContainer}/>
                    <Route component={NoMatchPage} />
                </Switch>
            </Router>
            
        </React.Fragment>            
    );
}

export default DefaultLayout;