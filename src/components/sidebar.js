import React, {useContext} from 'react'
import {Nav, Image, Row} from 'react-bootstrap'
import AddButton from './add_button'
import AppButton from './app_button'

import Accordion from './accordion'
import { Link, Redirect } from 'react-router-dom'
import { UserContext } from '../providers/UserProvider'
import { signOut } from '../firebase'

import LogoImage from '../assets/images/PavleuLogoYellow.png'
import AvatarImage from '../assets/images/icons/normal_avatar.png'
import StrataIcon from '../assets/images/icons/catagory_research.png'
import AudioIcon from '../assets/images/icons/audio.png'
import DriveIcon from '../assets/images/icons/drive.png'
import CalendarIcon from '../assets/images/icons/calendar.png'

import AndroidIcon from '../assets/images/icons/android_white.png'
import AppleIcon from '../assets/images/icons/apple_white.png'
import '../assets/css/sidebar.css'

function Sidebar() {
    const user = useContext(UserContext);
    return (
        <Nav className="d-none d-md-block sidebar p-3 custom-sidebar position-absolute"
            // onSelect={selectedKey => alert(`selected ${selectedKey}`)}
        >
            <div className="sidebar-sticky"></div>
            <div className="py-4 px-3">
                <Link to="/">
                    <Image src={LogoImage} fluid width = "100px" height = "100px" />
                </Link>
            </div>
            <Row className="pl-3 pb-2">
                <div className="avatar d-flex">
                    <Image
                        src={user.avatarUrl ? user.avatarUrl : AvatarImage}
                        fluid roundedCircle className="bg-white"
                        height={35} width={35} 
                    />
                    <div
                        className="badge-for-avatar bg-success rounded-circle border border-white"
                    ></div>
                </div>
                
                <div className="align-self-center px-2">
                    <h3 className="text-white m-0" style={{ fontSize: 18 }}>{user.name}</h3>
                </div>
            </Row>
            <Nav.Item>
                <Link to="/create" className="pt-3 nav-link"><AddButton>Create Task</AddButton></Link>
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
                <Link to="/edit_profile" className="text-white text-14 ml-2 nav-link">Edit profile</Link>
                <Link to="/transaction_history" className="text-white text-14 ml-2 nav-link">Transaction history</Link>
                <Nav.Link className="text-white text-14 ml-2" onClick={signOut}>Logout</Nav.Link>
                <Nav.Link className="text-white text-14 ml-2">Help!</Nav.Link>
            </Accordion>

            <div className="d-flex mobile-link mx-auto justify-content-center">
                <Image src={AndroidIcon} fluid width={40} height={40} className="mx-2"></Image>
                <Image src={AppleIcon} fluid width={40} height={40} className="mx-2"></Image>
            </div>
        </Nav>
    )
}

export default Sidebar
