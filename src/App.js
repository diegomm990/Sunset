import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './components/Nav/NavBar'
import './App.css'
import Home from './components/Home/Home'
import Products from './components/Products/Products'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/products' component={Products}/>
      </Switch>
    </Router>
  );
}

export default App;
