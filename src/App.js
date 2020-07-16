import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Routes
import Landing from './Components/Landing';
// import NewArrivals from './Components/NewArrivals';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        {/* <Route path="/NewArrivals" component={NewArrivals} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
