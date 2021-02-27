import React from 'react'
import { Image } from 'react-bootstrap'
import TriIcon from '../assets/images/icons/tri_icon.png'

function tri_button(props) {
    return (
        <div className="d-flex align-items-center">
            <div className="add-icon">
                <Image src={TriIcon} className="d-flex" fluid />
            </div>
            <div className="ml-2">
                <h3 className="text-white m-0 text-20"style={{fontSize: props.font}}><b>{props.children}</b></h3>
            </div>
        </div>
    )
}

export default tri_button
