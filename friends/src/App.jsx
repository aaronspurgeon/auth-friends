import React from "react";
import "./App.css";
import Signin from './components/Signin'
import { Link, Route, withRouter } from "react-router-dom"
import ProtectedRoute from './components/ProtectedRoute';
import { getToken } from './utils/api'
import Account from './components/Account';
import './App.scss'

function App() {
  const signedIn = getToken()
  return (
    <div className="App">
      <nav>
        <div>
          <h2 className='logo'>Lambda Friends</h2>
        </div>
        <div>
          <Link to='/' className='link'>Home</Link>
          {!signedIn && <Link to='/signin' className='link'>Sign In</Link>}
          {signedIn && <Link to='/account' className='link'>Account</Link>}
        </div>
      </nav>

      <Route exact path='/signin' component={Signin} />
      <ProtectedRoute exact path='/account' component={Account} />
    </div>
  );
}

export default withRouter(App);
