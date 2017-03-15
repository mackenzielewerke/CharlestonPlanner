import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'

export const LoginFormComponent = React.createClass({
	render: function(){
		return (
<div className="my-form">
  <h1 className="spaced-out">Login </h1>

<form className="centered-margins">
	<div className="form-section">
		<h4>Email </h4>
		<input type="text" className="form-control" name="msgFromEl"/>
	</div>

	<div className="form-section">
		<h4>Password </h4>
		<input type="text" className="form-control" name="msgFromEl"/>
	</div>

		<div className="button-div">
	    <button className="submit-button" type="submit">Register</button>
		</div>
	  </form>




	  </div>
	    )
	  }
	})
