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

function App() {
  const [pizzas, setPizzas] = useState([])
    
    useEffect(() => {
        fetch("https://61dd7484f60e8f0017668817.mockapi.io/pizza-card")
            .then((res) => res.json())
            .then((data) => {
                setPizzas(data)
                localStorage.setItem("menu", JSON.stringify(data))
            })
            .catch((error) => console.log(error))
    }, [])

  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem('basket')) || [])
  

  return (
    <Router>
    <div> 
      <Switch>
        <Route exact path='/'>
          <Header/>
          <Navbar basket={basket}/>
          <Main setBasket={setBasket} pizzas={pizzas}/>
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
        <Navbar basket={basket}/>
          Contacts page
        </Route>
        <Route exact path='/stock'>
          stock page
        </Route>
        <Route exact path='/Live'>
          Live page
        </Route>
        <Route path="/admin">
          <Admin authorized={false}/>
        </Route>
        <Route path="/dashboard">
          <Dashboard pizzas={pizzas} authorized={false}/> 
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
