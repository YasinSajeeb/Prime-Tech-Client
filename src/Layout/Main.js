import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="2">
                    <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col>
                    <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
};

export default Main;