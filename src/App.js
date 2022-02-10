import './App.css';
import Header from './components/Header/header';
import Main from './pages/main/Main';
import Navbar from './components/Navbar/navbar.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useState, useEffect } from 'react';
import Admin from './pages/admin/Admin.jsx'
import Dashboard from './pages/dashboard/dashboard';
import Publicroute from './route/PublicRoute';
import Privateroute from './route/PrivateRoute';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Api from './api/api';
import { menuPizzaAC } from './redux/actions/pizzaAction';

function App() {

  const dispatch = useDispatch()
  const [pizzas, setPizzas] = useState([])
    useEffect(() => {
        Api.getAllPizzas()
          .then((res) => {
            dispatch(menuPizzaAC(res.data))
        })
          .catch((error) => console.log(error))
    }, [])

    const basketData = useSelector((state) => state.basket.data || [])

    useEffect(() => {
      localStorage.setItem("basket", JSON.stringify(basketData))
    }, [basketData])
    
    const authData = useSelector((state) => state.auth.data)
    useEffect(() => {
      localStorage.setItem("auth", JSON.stringify(authData))
    }, [authData])

  return (
    <Router>
    <div> 
      <Switch>
        <Route exact path='/'>
          <Header/>
          <Navbar/>
          <Main  pizzas={pizzas}/>
        </Route>
        <Route exact path='/combo'>
          Combo page
        </Route>
        <Route exact path='/snacks'>
          snacks page
        </Route>
        <Route exact path='/desserts'>
          desserts page
        </Route>
        <Route exact path='/drinks'>
          drinks page
        </Route>
        <Route exact path='/other'>
          other page
        </Route>
        <Route exact path='/AboutUs'>
          AboutUs page
        </Route>
        <Route exact path='/contacts'>
        <Header/>
        <Navbar />
          Contacts page
        </Route>
        <Route exact path='/stock'>
          stock page
        </Route>
        <Route exact path='/Live'>
          Live page
        </Route>
        <Publicroute path="/admin"  component={() => <Admin  />}/>
        {/* <Route path="/admin">
          <Admin authorized={false} setIsAuth={setIsAuth}/>
        </Route> */}
        <Privateroute path="/dashboard" component={() => <Dashboard pizzas={pizzas}/>}/>
        {/* <Route path="/dashboard">
          <Dashboard pizzas={pizzas} authorized={true}/> 
        </Route> */}
      </Switch>
    </div>
    </Router>
  );
}

export default App;
