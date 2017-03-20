import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'

export const AuthenticatedNavComponent = React.createClass({

	_handleLogOut: function(evt){
	window.location.hash = ""
},

	_handleMyAccount: function(evt){
		window.location.hash="accounts/:id"
	},

	_handleHome: function(evt){
		window.location.hash=""
	},

	render: function(){
		return (
			<nav className="reg-navigation">
        <img className="logo" src="./images/CharlestonPlanner.png" alt=""></img>
        <div className="sign-in">
					<div className="hover-color spaced-out" onClick={this._handleHome}>Home</div>
          <div className="hover-color spaced-out" onClick={this._handleMyAccount}>My Account</div>
          <div className="hover-color spaced-out" onClick={this._handleLogOut}>Log Out</div>
        </div>
			</nav>
		)
	}
})
