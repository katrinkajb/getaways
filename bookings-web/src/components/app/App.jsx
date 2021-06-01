import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Details from '../../containers/Details';
import Getaways from '../../containers/Getaways';
import Login from '../auth/Login';
import Logout from '../auth/LogOut';
import SignUp from '../auth/SignUp';
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
          exact
          path='/:id' 
          exact render={(routerProps) => <Details {...routerProps}/>} 
        />
        <Route 
          path='/signup' 
          exact render={(routerProps) => <SignUp {...routerProps} setUser={setUser} user={user} />}
        />
        <Route 
          path='/login' 
          exact render={(routerProps) => <Login {...routerProps} setUser={setUser} user={user} />} 
        />
        <Route 
          path='/logout' 
          exact render={(routerProps) => <Logout {...routerProps} setUser={setUser} user={user} />}
        />
      </Switch>
    </Router>

  )
}
