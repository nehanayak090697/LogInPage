import React from 'react';
//import Auth from "./components/Auth"
import Registration from "./components/Registration"
import ContactUs from './components/ContactUs';
 import {
 BrowserRouter as Router,
 Switch,
 Route,
  Link
} from "react-router-dom"


function App() {
  return (
    <>
      {
         <Router>
        
        
        <Switch>
          <Route exact path="/" component={ContactUs} />
          <Route path="/Registration" component={Registration} />
        </Switch>
      </Router> }
      
    </>

  );
}

export default App;