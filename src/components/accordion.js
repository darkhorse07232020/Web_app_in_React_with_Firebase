import React, { useState } from 'react';
import {Nav} from 'react-bootstrap';
import TriButton from './tri_button';

function Accordion({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Nav.Item>
                <Nav.Link className="pt-3" onClick={() => setIsOpen(!isOpen)}>
                    <TriButton font={20} isRotate={isOpen}>{title}</TriButton>
                </Nav.Link>
            </Nav.Item>
            {isOpen && children}
        </>
    );
}

export default Accordion;

