import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Details from '../../containers/Details';
import Getaways from '../../containers/Getaways';
import LoginPage from '../../containers/LoginPage';
import LogOutPage from '../../containers/LogOutPage';
import Registration from '../../containers/Registration';
import Header from '../Header/Header';

export default function App() {

  const [user, setUser] = useState(null);
  
  return (
    <Router>
      <Header />
      <Switch>
        <Route 
          path='/' 
          exact render={(routerProps) => <Getaways {...routerProps}/>}
        />
        <Route 
          path='/signup' 
          exact render={(routerProps) => <Registration {...routerProps} setUser={setUser} user={user} />}
        />
        <Route 
          path='/login' 
          exact render={(routerProps) => <LoginPage {...routerProps} setUser={setUser} user={user} />} 
        />
        <Route 
          path='/logout' 
          exact render={(routerProps) => <LogOutPage {...routerProps} setUser={setUser} user={user} />}
        />
        <Route 
          exact
          path='/:id' 
          render={(routerProps) => <Details {...routerProps}/>} 
        />
      </Switch>
    </Router>

  )
}
