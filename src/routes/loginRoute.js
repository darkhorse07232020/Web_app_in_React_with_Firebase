import React, {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../providers/UserProvider';


function LoginRoute({path, children, ...rest}) {
    const user = useContext(UserContext);
    return (
        !user
            ?
                <Route path={path} {...rest}>
                    {children}
                </Route>
            :
                <Redirect to="/" />
    )
}

export default LoginRoute;
