import React from 'react'
import { Image } from 'react-bootstrap'
import TriIcon from '../assets/images/icons/tri_icon.png'

function Tri_button(props) {
    return (
        <div className="d-flex align-items-center">
            <div className="add-icon">
                <Image src={TriIcon} className="d-flex" fluid style={!props.isRotate ? {transform: 'rotate(-90deg)'} : {transform: 'rotate(0deg)'}}/>
            </div>
            <div className="ml-2">
                <h3 className="text-white m-0 text-20"style={{fontSize: props.font}}>{props.children}</h3>
            </div>
        </div>
    )
}

export default Tri_button
