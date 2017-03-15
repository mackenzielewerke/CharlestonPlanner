import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'

export const RegularNavComponent = React.createClass({

	_handleLogIn: function(evt){
	window.location.hash = "account/login"
},

	_handleSignUp: function(evt){
		window.location.hash="account/register"
	},

	render: function(){
		return (
			<nav className="reg-navigation">
        <img className="logo" src="./images/CharlestonPlanner.png" alt=""></img>
        <div className="sign-in">
          <div className="hover-color spaced-out" onClick={this._handleSignUp}>Sign Up</div>
          <div className="hover-color spaced-out" onClick={this._handleLogIn}>Log In</div>
        </div>
			</nav>
		)
	}
})
