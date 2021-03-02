import React, { useContext } from 'react'
import { Image } from 'react-bootstrap'
import ReactPlayer from 'react-player/youtube'
import { UserContext } from '../providers/UserProvider'

import { FaPlus } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";

import AvatarImage from '../assets/images/icons/normal_avatar.png'

function Welcome() {
    const user = useContext(UserContext);
    return (
        <div className="w-100">
            <div className="header welcome-header align-items-center d-flex">
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
            <div className="content-body p-5 text-center">
                <h2>How to use Pavleu <FaCaretRight /></h2>
                <h3>This is a text to explain the Video</h3>
                <div className="pt-5">
                    <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" controls={true} className="m-auto" light={true} playing={true}></ReactPlayer>
                </div>
            </div>
        </div>
    )
}

export default Welcome
