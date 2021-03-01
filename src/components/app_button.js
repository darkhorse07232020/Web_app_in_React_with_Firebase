import React from 'react'
import { Image } from 'react-bootstrap'

function app_button(props) {
    return (
        <div className="d-flex align-items-center ml-2">
            <div className="add-icon">
                <Image src={props.image} className="d-flex" fluid />
            </div>
            <div className="ml-3">
                <h3 className="text-white m-0 text-14">{props.children}</h3>
            </div>
        </div>
    )
}

export default app_button
