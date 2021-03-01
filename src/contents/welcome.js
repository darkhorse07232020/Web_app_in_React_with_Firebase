import React from 'react'
import { Image } from 'react-bootstrap'
import ReactPlayer from 'react-player/file'
import IntroVideo from '../assets/videos/intro.mp4'

import { FaPlus } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";

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
            <div className="content-body p-5 text-center">
                <h2>How to use Pavleu <FaCaretRight /></h2>
                <h3>This is a text to explain the Video</h3>
                <div className="pt-5">
                    <ReactPlayer url={IntroVideo} controls="true" className="m-auto" light="true" playing="true"></ReactPlayer>
                </div>
            </div>
        </div>
    )
}

export default welcome
