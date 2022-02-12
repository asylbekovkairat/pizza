import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Privateroute = ({ component: Component, path }) => {
  const authData = useSelector((state) => state.auth.data);
  if (!authData) {
    return <Redirect to="/admin" />
  }
  return <Route path={path}>
    <Component />
  </Route>
}

export default Privateroute;
