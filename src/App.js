import './App.css';
import Header from './components/Header/header';
import Main from './pages/main/Main';
import Navbar from './components/Navbar/navbar.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useState } from 'react';



function App() {
  // const [pizzas, setPizzas] = useState([])

  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem('basket')) || [])

  return (
    <Router>
    <div>
      <Header/>
      <Navbar basket={basket}/>
      <Switch>
        <Route exact path='/'>
          <Main setBasket={setBasket} />
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
          Contacts page
        </Route>
        <Route exact path='/stock'>
          stock page
        </Route>
        <Route exact path='/Live'>
          Live page
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
