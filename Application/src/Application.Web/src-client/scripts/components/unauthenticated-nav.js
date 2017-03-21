import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'
import {ACTIONS} from '../actions.js'


export const RegularNavComponent = React.createClass({

	_handleNavigationClick: function(evt){
		let clickedNav = evt.target.dataset.route
		let routingObj = {
			"HOME" : '',
			"LOGIN" : 'accounts/login',
			"REGISTER" : 'accounts/register',
		}

		console.log('From <RegularNavComponent/>: ', clickedNav)
		ACTIONS.routeTo(routingObj[clickedNav])
	},

	render: function(){
		return (
			<nav className="reg-navigation">
        <img className="logo" src="./images/CharlestonPlanner.png" alt=""></img>
        <div className="sign-in">
					<div className="hover-color spaced-out" onClick={this._handleNavigationClick} data-route="HOME">Home</div>
          <div className="hover-color spaced-out" onClick={this._handleNavigationClick} data-route="REGISTER">Sign Up</div>
          <div className="hover-color spaced-out" onClick={this._handleNavigationClick} data-route="LOGIN">Log In</div>
        </div>
			</nav>
		)
	}
})
