import React from 'react';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './components/Checkout'
import Login from './components/Login'
import { useStateValue } from './context/StateProvider'
import { useEffect } from 'react';
import { auth } from './fb/fb'
import Footers from './components/Footers'
import Payment from './components/Payment'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { stripeKey } from './key/key'
import Orders from './components/Orders'


const promise = loadStripe(`${stripeKey}`);

function App() {
  
  const [{ user }, dispatch] = useStateValue()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])


  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header/>
            <Orders/>
            <Footers/>
          </Route>
          <Route path="/payment">
            <Header/>
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footers/>
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout />
            <Footers/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Header/>
            <Home />
            <Footers/>
          </Route>
        </Switch>
      </div> 
    </Router>
  );
}

export default App;
