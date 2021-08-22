import React, { Component } from 'react'

export default class Registration extends Component {
    render() {
        return (
            <div>
               <form action="">
               <div>
                   <label htmlfor="Username">UserName</label>
                   <input type="text" name="username" id="username"/>
               </div>
               <div>
                   <label htmlfor="Password">Password</label>
                   <input type="password" name="Password" id="password"/>
               </div>
               <div>
                   <label htmlfor="Username">Confirm Password</label>
                   <input type="password" name="username" id="username"/>
               </div>

               <div>
                   <button>Register</button>
               </div>

               </form>
            </div>
        )
    }
}
