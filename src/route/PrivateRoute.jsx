import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const Privateroute = ( {component: Component, auth, path}) => {
    if(!auth){
        return <Redirect to="/admin"/>
    }
    return <Route path={path}>
        <Component/>
    </Route> 
}

export default Privateroute;
