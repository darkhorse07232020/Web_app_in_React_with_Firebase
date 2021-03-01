import React from 'react'
import Sidebar from './sidebar'
import WelcomeContents from '../contents/welcome'

function Home() {
    return (
        <div className="d-flex">
            <Sidebar />
            <WelcomeContents />
        </div>
    )
}

export default Home
