import React from 'react'
import {Nav, Image, Container, Row, Col} from 'react-bootstrap'
import AddButton from '../components/add_button'
import TriButton from '../components/tri_button'

import LogoImage from '../assets/images/PavleuLogoYellow.png'
import AvatarImage from '../assets/images/avatar.png'
import AndroidIcon from '../assets/images/icons/android_white.png'
import AppleIcon from '../assets/images/icons/apple_white.png'
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
                <Col md={3}>
                    <div className="avatar">
                        <Image src={AvatarImage} fluid roundedCircle className="bg-white"></Image>
                        <div
                            className="badge-for-avatar bg-success rounded-circle border border-white"
                        ></div>
                    </div>
                </Col>
                <Col md={9} className="align-self-center px-0">
                    <h3 className="text-white"><b>Rachel Frank</b></h3>
                </Col>
            </Row>
            <Nav.Item>
                <Nav.Link href="/home" className="pt-4"><AddButton>Create Task</AddButton></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link><TriButton>Active tasks</TriButton></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link><TriButton>Inactive tasks</TriButton></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="pt-4"><TriButton font={25}>Apps</TriButton></Nav.Link>
            </Nav.Item>
            <div className="d-flex mobile-link mx-auto justify-content-center">
                <Image src={AndroidIcon} fluid width={60} height={60} className="mx-2"></Image>
                <Image src={AppleIcon} fluid width={60} height={60} className="mx-2"></Image>
            </div>
        </Nav>
    )
}

export default sidebar
