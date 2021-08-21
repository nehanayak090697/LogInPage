import React from 'react';
import Auth from "./components/Auth"
import Registration from "./components/Registration"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <>
      <Router>
        <Link to="/Registration">Registration</Link><br />
        <Link to="/">Login</Link>
        <Switch>
          <Route exact path="/" component={Auth} />
          <Route path="/Registration" component={Registration} />
        </Switch>
      </Router>
    </>

  );
}

export default App;