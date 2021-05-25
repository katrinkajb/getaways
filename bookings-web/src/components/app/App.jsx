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
          component={Details} 
        />
        <Route 
          path='/register' 
          exact 
          component={Register} 
        />
        <Route 
          path='/login' 
          exact 
          component={Login} 
        />
        <Route 
          path='/logout' 
          exact 
          component={Logout} 
        />
      </Switch>
    </Router>

  )
}
