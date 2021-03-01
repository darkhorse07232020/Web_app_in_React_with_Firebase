import React from 'react'
import { Image } from 'react-bootstrap'
import AddIcon from '../assets/images/icons/add_icon.png'

function add_button({children}) {
    return (
        <div className="d-flex align-items-center">
            <div className="add-icon">
                <Image src={AddIcon} className="d-flex" fluid />
            </div>
            <div className="add-button-text ml-2">
                <h3 className="text-white m-0 text-14">{children}</h3>
            </div>
        </div>
    )
}

export default add_button
