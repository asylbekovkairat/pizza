import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Publicroute = ({ component: Component, path }) => {
  const authData = useSelector((state) => state.auth.data);
  if (authData) {
    return <Redirect to="/dashboard" />
  }

  return <Route path={path}>
    <Component />
  </Route>

}

export default Publicroute;
