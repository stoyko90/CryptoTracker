import React, {useState, useEffect} from 'react';
import Home from '../Home/Home';
import Register from '../Register/Register';
import { Switch, Route, Redirect } from 'react-router-dom';


export default function App() {


  return (
    <div>
      <Switch>
        <Route exact path='/' >
          <Redirect to='/home' />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
      </Switch>
    </div>
  )
}



      