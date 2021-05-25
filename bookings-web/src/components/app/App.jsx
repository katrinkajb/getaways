import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Details from '../../containers/Details';
import Getaways from '../../containers/Getaways';
import Header from '../Header/Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route 
          path='/' 
          exact render={(routerProps) => 
          <Getaways {...routerProps} />} 
        />
        <Route 
          path='/:id' 
          exact
          component={Details } 
        />
        {/* <Route 
          path='/register' 
          exact render={(routerProps) => 
          <Register {...routerProps} />} 
        />
        <Route 
          path='/login' 
          exact render={(routerProps) => 
          <Login {...routerProps} />} 
        />
        <Route 
          path='/logout' 
          exact render={(routerProps) => 
          <Logout {...routerProps} />} 
        /> */}
      </Switch>
    </Router>

  )
}
