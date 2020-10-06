import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
//Pages:
import Home from './Pages/home';

// Components
import Header from './Components/Header';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path='/' exact>
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
