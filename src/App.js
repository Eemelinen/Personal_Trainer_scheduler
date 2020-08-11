import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigator from './components/Navigator';
import './App.css';
import Calender from './pages/Calender';
import Customers from './pages/Customers';
import Trainings from './pages/Trainings';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navigator />
          <Switch>
            <Route exact path='/trainings' component={Trainings}/>
            <Route path='/calender' component={Calender}/>
            <Route exact path='/' component={Customers}/>
            <Route render={() => <h1>Sorry! Page not found.</h1>}/>
          </Switch>
        </div>
      </BrowserRouter>    
    </div>
  );
}

export default App;
