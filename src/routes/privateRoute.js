import React from 'react';
import { Route } from 'react-router-dom';
import Sidebar from '../components/sidebar'

function PrivateRoute({path, children, ...rest}) {
    return (
        <Route path={path} {...rest}>
            <Sidebar />
            {children}
        </Route>
    )
}

export default PrivateRoute;
