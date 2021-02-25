import React, { useState, useEffect } from 'react';
import {
    Col,
    Container,
    Row
} from 'reactstrap'
import SchoolTable from '../../Components/schoolTable/index'
import NavBarR from '../../Components/NavBarR/index'
import '../../App.css'

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
                    <Col xs="6">
                        <Row>
                            <Col>
                                <h2>
                                    Insights
                            </h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h2>

                                </h2>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home