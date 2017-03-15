import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'

export const RegistrationFormComponent = React.createClass({
	render: function(){
		return (
<div className="my-form">
  <h1 className="spaced-out">Register Today!  </h1>

  <form className="register-form-centered">
		<div className="side-by-side">
	    <div className="register-form">
	      <h4>First Name </h4>
	      <input type="text" className="form-control" name="theMsgEl"/>
	    </div>


	    <div className="register-form">
	      <h4>Last Name </h4>
	      <input type="text" className="form-control" name="msgFromEl"/>
	    </div>
		</div>

    <div className="register-form">
      <h4>Email </h4>
      <input type="text" className="form-control" name="msgFromEl"/>
    </div>

		<div className="side-by-side">
	    <div className="register-form">
	      <h4>Password </h4>
	      <input type="text" className="form-control" name="msgFromEl"/>
	    </div>

	    <div className="register-form">
	      <h4>Confirm Password </h4>
	      <input type="text" className="form-control" name="msgFromEl"/>
	    </div>
		</div>

		<div className="special-button-div">
    	<button className="submit-button spaced-out" type="submit">Register</button>
		</div>
  </form>




  </div>
    )
  }
})
