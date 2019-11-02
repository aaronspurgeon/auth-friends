import React from "react";
import "./App.css";
import Signin from './components/Signin'
import { Link, Route, withRouter } from "react-router-dom"
import ProtectedRoute from './components/ProtectedRoute';
import { getToken } from './utils/api'
import Account from './components/Account';

function App() {
  const signedIn = getToken()
  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
        {!signedIn && <Link to='/signin'>Sign In</Link>}
        {signedIn && <Link to='/account'>Account</Link>}
      </nav>

      <Route exact path='/signin' component={Signin} />
      <ProtectedRoute exact path='/account' component={Account} />
    </div>
  );
}

export default withRouter(App);
