import React, { useState, useEffect } from 'react';
import {
    Col,
    Container,
    Row
} from 'reactstrap'
import SchoolTable from '../../Components/schoolTable/index'
import NavBarR from '../../Components/NavBarR/index'
import '../Home/index.css'

function Home() {

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <NavBarR />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col xs="12" md="12" lg="12" xl="12">
                        <h2>
                            <SchoolTable />
                        </h2>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home