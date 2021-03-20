import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';
const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser, setLoggedInUser,value] = useContext(UserContext)
    console.log(useContext(UserContext))
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser.name || loggedInUser.email? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/signin",
                    state: { from: location }
                    }}
                />
                )
            }
            />
    );
};

export default PrivateRoute;