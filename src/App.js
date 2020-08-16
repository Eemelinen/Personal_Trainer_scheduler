import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Calender from './pages/Calender';
import Customers from './pages/Customers';
import Trainings from './pages/Trainings';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="App">
        <Switch>
          <Route exact path='/trainings' component={Trainings}/>
          <Route path='/calender' component={Calender}/>
          <Route exact path='/' component={Customers}/>
          <Route render={() => <h1>Sorry! Page not found.</h1>}/>
        </Switch>
      </div>
    </BrowserRouter>    
  );
}

export default App;
