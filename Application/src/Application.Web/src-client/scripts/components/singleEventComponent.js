import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'



export const SingleEventComponent = React.createClass({

	_eachPictureTemplate: function(itemObj){
		console.log(itemObj)
	},
	render: function(){
		let oneEvents=this.props.oneEventsList
		return (
			<div className="single-event">
						{this._eachPictureTemplate()}
						<h1>{oneEvents.name}</h1>
			      <img src="https://i.ytimg.com/vi/8HVWitAW-Qg/hqdefault.jpg" alt="..."/>
			      <div className="single-event-caption">
			        <h3>{oneEvents.date}</h3>
							<h3>{oneEvents.venue}</h3>
							<p>{oneEvents.description}</p>
			        <p><a href="#" className="btn btn-primary" role="button">Save to my Favorites</a></p>
			      </div>
			  </div>


		)
	}
})
