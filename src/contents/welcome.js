import React from 'react'
import { Image } from 'react-bootstrap'
import { FaPlus } from "react-icons/fa";

import AvatarImage from '../assets/images/avatar.png'

function welcome() {
    return (
        <div className="w-100">
            <div className="header welcome-header align-items-center d-flex">
                <div className="position-absolute header-users d-flex">
                    <div className="header-avatar position-relative">
                        <Image src={AvatarImage} fluid className="header-avatar bg-white"></Image>
                        <div
                            className="badge-for-avatar bg-success rounded-circle border border-white"
                        ></div>
                    </div>
                    <div className="ml-1">
                        <FaPlus />
                    </div>
                </div>
            </div>
            <div className="content-body p-5">
                <h1>How to use Pavleu</h1>
            </div>
        </div>
    )
}

export default welcome
