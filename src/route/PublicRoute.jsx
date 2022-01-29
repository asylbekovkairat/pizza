import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const Publicroute = ({ component: Component, path, auth }) => {
    
    if(auth){
        return <Redirect to="/dashboard" />
    }

    return <Route path={path}>
        <Component/>
    </Route>

}

export default Publicroute;
