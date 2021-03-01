import React from 'react'
import {Nav, Image, Container, Row, Col} from 'react-bootstrap'
import AddButton from '../components/add_button'
import AppButton from '../components/app_button'

import LogoImage from '../assets/images/PavleuLogoYellow.png'
import AvatarImage from '../assets/images/avatar.png'
import StrataIcon from '../assets/images/icons/catagory_research.png'
import AudioIcon from '../assets/images/icons/audio.png'
import DriveIcon from '../assets/images/icons/drive.png'
import CalendarIcon from '../assets/images/icons/calendar.png'

import AndroidIcon from '../assets/images/icons/android_white.png'
import AppleIcon from '../assets/images/icons/apple_white.png'
import '../assets/css/sidebar.css'
import Accordion from '../components/accordion'

function Sidebar() {

    return (
        <Nav className="d-none d-md-block sidebar p-3 custom-sidebar position-absolute"
            activeKey="/home"
            // onSelect={selectedKey => alert(`selected ${selectedKey}`)}
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
                <Nav.Link className="pt-4"><AddButton>Create Task</AddButton></Nav.Link>
            </Nav.Item>

            <Accordion title="Active tasks">
            </Accordion>

            <Accordion title="Inactive tasks">
            </Accordion>

            <Accordion title="Apps">
                <Nav.Link><AppButton image={StrataIcon}>Pavleu Strata</AppButton></Nav.Link>
                <Nav.Link><AppButton image={AudioIcon}>Pavleu audio</AppButton></Nav.Link>
                <Nav.Link><AppButton image={DriveIcon}>Pavleu drive</AppButton></Nav.Link>
                <Nav.Link><AppButton image={CalendarIcon}>Pavleu calendar</AppButton></Nav.Link>
            </Accordion>

            <Accordion title="Clique">
                <Nav.Link className="ml-2"><AddButton>Add team</AddButton></Nav.Link>
            </Accordion>

            <Accordion title="Settings">
                <Nav.Link className="text-white text-20 ml-2">Edit profile</Nav.Link>
                <Nav.Link className="text-white text-20 ml-2">Transaction history</Nav.Link>
                <Nav.Link className="text-white text-20 ml-2">Logout</Nav.Link>
                <Nav.Link className="text-white text-20 ml-2">Help!</Nav.Link>
            </Accordion>

            <div className="d-flex mobile-link mx-auto justify-content-center">
                <Image src={AndroidIcon} fluid width={60} height={60} className="mx-2"></Image>
                <Image src={AppleIcon} fluid width={60} height={60} className="mx-2"></Image>
            </div>
        </Nav>
    )
}

export default Sidebar
