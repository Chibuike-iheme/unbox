import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Routes
import Landing from './Components/Landing';
import NewArrivals from './Components/NewArrivals';
import GiftOut from './Components/GiftOut'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/NewArrivals" component={NewArrivals} />
        <Route path="/GiftOut" component={GiftOut} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
