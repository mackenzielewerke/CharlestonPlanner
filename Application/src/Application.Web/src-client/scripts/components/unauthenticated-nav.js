import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'

export const RegularNavComponent = React.createClass({
	render: function(){
		return (
			<nav className="reg-navigation">
        <img className="logo" src="./images/CharlestonPlanner.png" alt=""></img>
        <div className="sign-in">
          <div>Sign Up</div>
          <div>Log In</div>
        </div>
			</nav>
		)
	}
})
