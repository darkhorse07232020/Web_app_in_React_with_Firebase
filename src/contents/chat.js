import React, { useContext } from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import { UserContext } from '../providers/UserProvider'

import { FaPlus } from "react-icons/fa";

import AvatarImage from '../assets/images/icons/normal_avatar.png'

function Chat() {
    const user = useContext(UserContext);
    return (
        <div className="w-100">
            <div className="header chat-header align-items-center d-flex">
                <Row className="w-100">
                    <Col md={3} className="mr-2">
                        <input placeholder="*Task title" width="100%"></input>
                    </Col>
                    <Col md={5}>
                        <input placeholder="Find in message" width="100%"></input>
                    </Col>
                </Row>
                <div className="position-absolute header-users d-flex">
                    <div className="header-avatar position-relative d-flex">
                        <Image
                            src={user.avatarUrl ? user.avatarUrl : AvatarImage} width={30} height={30}
                            fluid className="header-avatar bg-white" />
                        <div
                            className="badge-for-avatar bg-success rounded-circle border border-white"
                        ></div>
                    </div>
                    <div className="ml-1">
                        <FaPlus />
                    </div>
                </div>
            </div>
            <div className="content-body p-5 text-center bg-dark">
                <div>

                </div>
            </div>
        </div>
    )
}

export default Chat
