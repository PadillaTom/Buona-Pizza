import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
//Pages:
import Home from './Pages/home';
import About from './Pages/about';
import Error from './Pages/error';
import Menu from './Pages/menu';
import ProductDetails from './Pages/productDetails';
import Cart from './Pages/cart';
import Login from './Pages/login';
import NewsDetails from './Pages/newsDetails';
// Components
import Header from './Components/Header';
import Footer from './Components/Footer';
// Basket Context For Users:
import { useStateValue } from './Context/CartContext';
// Firebase:
import { auth } from './firebase';

function App() {
  // Hook for Users Cart:
  const [{ user }, dispatch] = useStateValue();
  // Use Effect:
  useEffect(() => {
    // This will track whenever user Auth changes
    const unsuscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // There is an user Logged in.
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        //There is NO ONE Logged in.
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
    return () => {
      //Cleanup:
      unsuscribe();
    };
  }, []);

  // Main:
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
        <Route  
        path='/news/:id' 
        exact
          children={<NewsDetails></NewsDetails>}
        ></Route>
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
        <Route path='/login'>
          <Login></Login>
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
