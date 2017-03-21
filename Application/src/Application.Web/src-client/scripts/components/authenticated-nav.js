import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'

export const AuthenticatedNavComponent = React.createClass({

	_handleNavigationClick: function(evt){
		let clickedNav = evt.target.dataset.route
		let routingObj = {
			"HOME" : '',
			"ACCOUNTS" : 'accounts/:id',
		}

		ACTIONS.routeTo(routingObj[clickedNav])
	},

	_handleLogoutClick: function(){
		ACTIONS.logUserOut()
	},

	render: function(){
		return (
			<nav className="reg-navigation">
        <img className="logo" src="./images/CharlestonPlanner.png" alt=""></img>
        <div className="sign-in">
					<div className="hover-color spaced-out" onClick={this._handleNavigationClick} data-route="HOME">Home</div>
          <div className="hover-color spaced-out" onClick={this._handleNavigationClick} data-route="ACCOUNTS">My Account</div>
          <div className="hover-color spaced-out" onClick={this._handleLogoutClick} data-route="HOME">Log Out</div>
        </div>
			</nav>
		)
	}
})
