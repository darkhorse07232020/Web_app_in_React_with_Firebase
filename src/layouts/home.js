import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Sidebar from './sidebar'
import Chat from '../contents/chat'
import WelcomeContents from '../contents/welcome'

function Home() {
    return (
        <Router>
            <div className="d-flex">
                <Sidebar />
                <Switch>
                    <Route extract path="/">
                        <WelcomeContents />
                    </Route>
                    <Route path="/create">
                        <Chat />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Home
