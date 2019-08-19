import React from 'react';
import { withAuth } from '../../context/Auth';
import  LoginForm from '../LoginForm';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
    component: RouteComponent,
    isAuthorized,
    loginPath,
    ...rest
}) => (
    <>
        <Route
            {...rest}
            render={routeProps => 
                isAuthorized ? (
                    <RouteComponent {...routeProps} />
                ) : (  
                    <Redirect to={LoginForm} />
                )
            }
        />
    </>
);

export default withAuth(PrivateRoute);
