import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'



export const SingleEventComponent = React.createClass({
	render: function(){
		return (
			<div className="single-event">
						<h1>Event Name</h1>
			      <img src="http://images.huffingtonpost.com/2015-11-27-1448621711-1452425-FunnyCatNames-thumb.jpg" alt="..."/>
			      <div className="single-event-caption">
			        <h3>Event Date</h3>
							<h3>Event Price</h3>
							<h3>Event Location</h3>
							<h3>Event Venue</h3>
							<p>Event Description: blah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah blah blahblah blah blah blah blah blahblah blah blah blah blah blahblah blah blah blah blah blahblah blah blah blah blah blahblah blah blah blah blah blahblah blah blah blah blah blahblah blah blah blah blah blahblah blah blah blah blah blah</p>
			        <p><a href="#" className="btn btn-primary" role="button">Save to my Favorites</a></p>
			      </div>
			  </div>


		)
	}
})
