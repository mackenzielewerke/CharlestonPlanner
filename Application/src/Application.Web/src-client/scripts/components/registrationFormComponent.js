import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'
import {ACTIONS} from '../actions.js'

// import AccountsController from "./AccountsController.cs"

export const RegistrationFormComponent = React.createClass({
	getInitialState: function(){
		return{
		flashMessage_nameField: ''
		}
	},

_validateFirstName: function(formDomEl){
	let firstNameValue=formDomEl.inputFirstName.value
	if(firstNameValue.length < 1){
		this.setState({
			flashMessage_nameField: "You must enter your name"
		})
	}
},

_validateLastName: function(formDomEl){
	let lastNameValue=formDomEl.inputLastName.value
	if(lastNameValue.length < 1){
		this.setState({
			flashMessage_nameField: "You must enter your full name"
		})
	}
},

_validateEmail: function(formDomEl){
	let emailValue=formDomEl.inputEmail.value
	if(emailValue.length < 1){
		this.setState({
			flashMessage_nameField: "You must enter your email address"
		})
	}
},

_validatePasswords: function(formDomEl){
let passwordValueOne=formDomEl.inputPasswordOne.value
let passwordValueTwo=formDomEl.inputPasswordTwo.value

if(passwordValueOne.length < 1){
	this.setState({
		flashMessage_nameField: "Whoops, looks like you're missing something"
	})
}
if (passwordValueOne !== passwordValueTwo){
	console.log("NOPE")
	this.setState({
		flashMessage_nameField: 	'Passwords need to match'
	})
} else {
	passwordValueOne= ""
	passwordValueTwo=""
	console.log("SUCCESS")
}
},




	_handleSubmit: function(evt){
		evt.preventDefault()
		console.log("CLICKKKK")
		console.log(evt.target)
		let formEl=evt.target


	this._validateFirstName(formEl)
	this._validateLastName(formEl)
	this._validateEmail(formEl)
	this._validatePasswords(formEl)

	let regRequirements = {
			email: formEl.inputEmail.value,
			password: formEl.inputPasswordOne.value,
			firstname: formEl.inputFirstName.value,
			lastname: formEl.inputLastName.value
		}

		ACTIONS.registerNewUser(regRequirements)

	// window.location.hash = `#`

	},

	render: function(){
		return (
<div className="my-form">
  <h1 className="spaced-out">Register Today!  </h1>

  <form onSubmit={this._handleSubmit} className="register-form-centered">
		<div className="side-by-side">
	    <div className="register-form">
	      <h4>First Name </h4>
	      <input type="text" className="form-control" name="inputFirstName"/>
				<p className="firstname flash-msg">{this.state.flashMessage_nameField}</p>
	    </div>


	    <div className="register-form">
	      <h4>Last Name </h4>
	      <input type="text" className="form-control" name="inputLastName"/>
				<p className="lastname flash-msg">{this.state.flashMessage_nameField}</p>
	    </div>
		</div>

    <div className="register-form">
      <h4>Email </h4>
      <input type="text" className="form-control" name="inputEmail"/>
			<p className="email flash-msg">{this.state.flashMessage_nameField}</p>
    </div>

		<div className="side-by-side">
	    <div className="register-form">
	      <h4>Password </h4>
	      <input type="password" className="form-control" name="inputPasswordOne"/>
				<p className="passwordone flash-msg">{this.state.flashMessage_nameField}</p>
	    </div>

	    <div className="register-form">
	      <h4>Confirm Password </h4>
	      <input type="password" className="form-control" name="inputPasswordTwo"/>
				<p className="passwordtwo flash-msg">{this.state.flashMessage_nameField}</p>
	    </div>
		</div>

		<div className="special-button-div">
    	<button className="submit-button spaced-out" type="submit" >Register</button>
		</div>
  </form>




  </div>
    )
  }
})
