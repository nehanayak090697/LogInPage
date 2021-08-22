import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import Registration from "../components/Registration"
export default class Auth extends Component {
    login() {
        alert("Kaam kr rhi hu");
    }
    registration(){
        <Router>
            <Route path="/Registration" component={Registration} />
        </Router>
    }
    render() {
        return (


            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Auth} />
                        
                    </Switch>
                </Router>
                <div>
                    <Router>
                        <div>
                            <label>UserName</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" />
                        </div>

                        <button onClick={()=>this.registration() }>Registration</button>
                        <button onClick={() => this.login()}>Login</button>
                    </Router>
                </div>


            </div>
        )
    }
}
