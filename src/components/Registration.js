import React,{ Component,useState} from 'react'
// import {BrowserRouter as Link} from 'react-router-dom'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	 Link
   } from "react-router-dom"

const Registration = () => {
			
	let obj = {
		first_name: "",
		last_name: "",
		email: "",
		password: "",
		confirm_password: "",
	}

	const [user, setUser] = useState(obj);

	let name, value;
	const getUserData = (e) => {

		name = e.target.name;

		value = e.target.value;

		setUser({ ... user, [name]: value });}

	const postData = (e) => {

		e.preventDefault();
		const { first_name, last_name, email, password, confirm_password, } = user;
		if (first_name && last_name && email && password && confirm_password) {
			const resp = fetch('https://madfoodie-71d76-default-rtdb.firebaseio.com/madfoodie.json',
				{
					method: "POST", headers: { "Content-Type": "application/json", },
					body: JSON.stringify({ first_name, last_name, email, password, confirm_password})
				});
			if (resp) {
				setUser({ first_name: "", last_name: "", email: "", password: "", confirm_password: "", })
				alert("Data Successfully stored.")
			}
		} else { alert("Please fill all details\n"); }



	}
	return (
		
		<div>
		<link href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
		<script src="//netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js"></script>
		<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>


		<div class="container">
			<div class="row centered-form">
				<div class="col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4" Method='POST'>
					<div class="panel panel-default">
						<div class="panel-heading">
							<h3 class="panel-title">Please sign up for Mad_Foodie Website </h3>
						</div>
						<div class="panel-body">
							<form role="form" >
								<div class="row">
									<div class="col-xs-6 col-sm-6 col-md-6">
										<div class="form-group">
											<input type="text" name="first_name" id="first_name" class="form-control input-sm" placeholder="First Name" value={user.first_name} onChange={getUserData} />
										</div>
									</div>
									<div class="col-xs-6 col-sm-6 col-md-6">
										<div class="form-group">
											<input type="text" name="last_name" id="last_name" class="form-control input-sm" placeholder="Last Name" value={user.last_name} onChange={getUserData}/>
										</div>
									</div>
								</div>

								<div class="form-group">
									<input type="email" name="email" id="email" class="form-control input-sm" placeholder="Email Address" value={user.email} onChange={getUserData} />
								</div>

								<div class="row">
									<div class="col-xs-6 col-sm-6 col-md-6">
										<div class="form-group">
											<input type="password" name="password" id="password" class="form-control input-sm" placeholder="Password" value={user.password} onChange={getUserData}/>
										</div>
									</div>
									<div class="col-xs-6 col-sm-6 col-md-6">
										<div class="form-group">
											<input type="password" name="confirm_password" id="confirm_password" class="form-control input-sm" placeholder="Confirm Password" value={user.confirm_password} onChange={getUserData}/>
										</div>
									</div>
								</div>

								<input type="submit" value="Register" class=" btn-info btn-block " onClick={postData} /><br />
								<Link to="/" class="link-login">Already have an account</Link>

							</form>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
		
	)
}

export default Registration










