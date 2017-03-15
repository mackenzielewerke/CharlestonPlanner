import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'

export const FormComponent = React.createClass({
	render: function(){
		return (
<div className="my-form">
  <h1>Register Today!  </h1>

  <form >
    <div className="form-section">
      <h4>First Name </h4>
      <input type="text" className="form-control" name="theMsgEl"/>
    </div>


    <div className="form-section">
      <h4>Last Name </h4>
      <input type="text" className="form-control" name="msgFromEl"/>
    </div>

    <div className="form-section">
      <h4>Email </h4>
      <input type="text" className="form-control" name="msgFromEl"/>
    </div>

    <div className="form-section">
      <h4>Password </h4>
      <input type="text" className="form-control" name="msgFromEl"/>
    </div>

    <div className="form-section">
      <h4>Confirm Password </h4>
      <input type="text" className="form-control" name="msgFromEl"/>
    </div>


    <button className="submit-button" type="submit">Register</button>
  </form>




  </div>
    )
  }
})
