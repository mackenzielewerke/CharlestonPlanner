import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'

export const RegistrationFormComponent = React.createClass({


_validateFirstName: function(formDomEl){
	let firstNameValue=formDomEl.inputFirstName.value
	let flashMsgEl=document.querySelector('.firstname.flash-msg')
	if(firstNameValue.length < 1){
		flashMsgEl.innerHTML= "You must enter your name"
	} else {
		firstNameValue=""
	}

},

_validateLastName: function(formDomEl){
	let lastNameValue=formDomEl.inputLastName.value
	let flashMsgEl=document.querySelector('.lastname.flash-msg')
	if(lastNameValue.length < 1){
		flashMsgEl.innerHTML= "You must enter your full name"
	}
},

_validateEmail: function(formDomEl){
	let emailValue=formDomEl.inputEmail.value
	let flashMsgEl=document.querySelector('.email.flash-msg')
	if(emailValue.length < 1){
		flashMsgEl.innerHTML= "You must your email address"
	}
},

_validatePasswords: function(formDomEl){
let passwordValueOne=formDomEl.inputPasswordOne.value
let passwordValueTwo=formDomEl.inputPasswordTwo.value
let flashMsgEl= document.querySelector('.passwordtwo.flash-msg')

if(passwordValueOne.length < 1){
	flashMsgEl.innerHTML= "You must enter a password"
}
if (passwordValueOne !== passwordValueTwo){
	console.log("NOPE")
	flashMsgEl.innerHTML = 	'Passwords need to match'
} else {
	passwordValueOne= ""
	passwordValueTwo=""
	console.log("SUCCESS")
}
},




	handleSubmit: function(evt){
		evt.preventDefault()
		console.log("CLICKKKK")
		console.log(evt.target)
		let formEl=evt.target


	this._validateFirstName(formEl)
	this._validateLastName(formEl)
	this._validateEmail(formEl)
	this._validatePasswords(formEl)

	},

	render: function(){
		return (
<div className="my-form">
  <h1 className="spaced-out">Register Today!  </h1>

  <form onSubmit={this.handleSubmit} className="register-form-centered">
		<div className="side-by-side">
	    <div className="register-form">
	      <h4>First Name </h4>
	      <input type="text" className="form-control" name="inputFirstName"/>
				<p className="firstname flash-msg"> </p>
	    </div>


	    <div className="register-form">
	      <h4>Last Name </h4>
	      <input type="text" className="form-control" name="inputLastName"/>
				<p className="lastname flash-msg"> </p>
	    </div>
		</div>

    <div className="register-form">
      <h4>Email </h4>
      <input type="text" className="form-control" name="inputEmail"/>
			<p className="email flash-msg"> </p>
    </div>

		<div className="side-by-side">
	    <div className="register-form">
	      <h4>Password </h4>
	      <input type="text" className="form-control" name="inputPasswordOne"/>
				<p className="passwordone flash-msg"> </p>
	    </div>

	    <div className="register-form">
	      <h4>Confirm Password </h4>
	      <input type="text" className="form-control" name="inputPasswordTwo"/>
				<p className="passwordtwo flash-msg"> </p>
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
