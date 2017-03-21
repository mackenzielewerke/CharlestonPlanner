import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'

export const LoginFormComponent = React.createClass({

	_validateEmail: function(formDomEl){
		let emailValue=formDomEl.inputEmail.value
		console.log(emailValue)
		let flashMsgEl=document.querySelector('.email.flash-msg')
		if(emailValue.length < 1){
			flashMsgEl.innerHTML= "You must enter your email address"
		} else {
			return emailValue= ""

		}
		return emailValue=""
	},

	_validatePasswords: function(formDomEl){
	let passwordValueOne=formDomEl.inputPasswordOne.value
	let flashMsgEl= document.querySelector('.passwordone.flash-msg')

	if(passwordValueOne.length < 1){
		flashMsgEl.innerHTML= "You must enter a password"
	} else {
		passwordValueOne= ""
	}
},


	_handleSubmit: function(evt){
		evt.preventDefault()
		console.log("CLICKKKK")
		console.log(evt.target)
		let formEl=evt.target

		this._validateEmail(formEl)
		this._validatePasswords(formEl)

	},

	_handleLoginFormSubmit: function(evt){
			evt.preventDefault()
			let formElement = evt.target

			let authRequirements = {
				email: formElement.email.value,
				password: formElement.password.value
			}

			console.log('<LoginView> handling form submit!', authRequirements)
			ACTIONS.loginUser(authRequirements)
		},




	render: function(){
		return (
<div className="my-form">
  <h1 className="spaced-out">Login </h1>

<form onSubmit={this._handleSubmit} className="centered-margins">
	<div className="form-section">
		<h4>Email </h4>
		<input type="text" className="form-control" name="email"/>
		<p className="email flash-msg"> </p>
	</div>

	<div className="form-section">
		<h4>Password </h4>
		<input type="text" className="form-control" name="password"/>
		<p className="passwordone flash-msg"> </p>
	</div>

		<div className="button-div">
	    <button className="submit-button" type="submit">Register</button>
		</div>
	  </form>




	  </div>
	    )
	  }
	})
