import React from 'react'
import {Nav, Image, Container, Row, Col} from 'react-bootstrap'
import LogoImage from '../assets/images/PavleuLogoYellow.png'
import '../assets/css/sidebar.css'

function sidebar() {
    return (
        <Nav className="col-md-3 d-none d-md-block sidebar p-3 custom-sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
            <div className="sidebar-sticky"></div>
            <Container>
                <Image src={LogoImage} fluid width = "100px" height = "100px" />
            </Container>
            <Row>
                <Col >
                </Col>
            </Row>
            <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                    Disabled
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default sidebar
