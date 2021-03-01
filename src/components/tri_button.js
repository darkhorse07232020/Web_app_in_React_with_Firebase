import React from 'react'
import { FaCaretRight, FaCaretDown } from 'react-icons/fa'

function Tri_button(props) {
    return (
        <div className="d-flex align-items-center">
            <div className="add-icon">
            {
                !props.isRotate ? <FaCaretRight color="white" /> : <FaCaretDown color="white" />
            }
            </div>
            <div className="ml-2">
                <h3 className="text-white m-0 text-14" style={{fontSize: props.font}}>{props.children}</h3>
            </div>
        </div>
    )
}

export default Tri_button
