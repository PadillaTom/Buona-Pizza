import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
//Pages:
import Home from './Pages/home';
import About from './Pages/about';
import Error from './Pages/error';
import Menu from './Pages/menu';
import ProductDetails from './Pages/productDetails';
import Cart from './Pages/cart';
// Components
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path='/' exact>
          <Home></Home>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
        <Route path='/menu' exact>
          <Menu></Menu>
        </Route>
        <Route
          path='/menu/:id'
          children={<ProductDetails></ProductDetails>}
        ></Route>
        <Route path='/cart'>
          <Cart></Cart>
        </Route>
        <Route path='*'>
          <Error></Error>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
