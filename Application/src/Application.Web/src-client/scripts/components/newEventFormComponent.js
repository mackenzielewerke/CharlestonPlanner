import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'

export const NewEventFormComponent = React.createClass({
	render: function(){
		return (
<div className="my-form">
  <h1>Add Your Own Event </h1>

  <form >
    <div className="form-section">
      <h4>Name </h4>
      <input type="text" className="form-control" name="theMsgEl"/>
    </div>


    <div className="form-section">
      <h4>Date </h4>
      <input type="text" className="form-control" name="msgFromEl"/>
    </div>

    <div className="form-section">
      <h4>Venue </h4>
      <input type="text" className="form-control" name="msgFromEl"/>
    </div>

    <div className="form-section">
      <h4>Description </h4>
      <input type="text" className="form-control" name="msgFromEl"/>
    </div>



    <button className="submit-button" type="submit">Register</button>
  </form>




  </div>
    )
  }
})
