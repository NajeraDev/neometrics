import { 
    Col,
    Container,
    Row
 } from 'reactstrap'
import DetailsCard from '../../Components/detailsCard'
import Map from '../../Components/Map/Map'

import ReactVirtualizedTable from '../../Components/schoolTable'




function Home() {
    return (
        <>
        <Container >
            <Row>
                <Col xs="12" md="12" lg="6" xl="6">
                    <h2>
                        <ReactVirtualizedTable/>
                    </h2>
                </Col>
                <Col xs="6">
                    <Row>
                        <Col>
                            <h2>
                                <DetailsCard/>
                            </h2>
                        </Col>
                    </Row>
                    <Row>
                    <Col>
                            <h2>
                                <Map/>
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