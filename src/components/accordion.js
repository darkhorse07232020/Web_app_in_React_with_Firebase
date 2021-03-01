import React, { useState } from 'react';
import {Nav} from 'react-bootstrap';
import TriButton from './tri_button';

function Accordion({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Nav.Item>
                <Nav.Link onClick={() => setIsOpen(!isOpen)}>
                    <TriButton font={16} isRotate={isOpen}>{title}</TriButton>
                </Nav.Link>
            </Nav.Item>
            {isOpen && children}
        </>
    );
}

export default Accordion;

