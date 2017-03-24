import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'
import moment from 'moment'




export const SingleEventComponent = React.createClass({


	_eachPictureTemplate: function(itemObj){
	},
	render: function(){
		let oneEvents=this.props.oneEventsList
		let theDate= this.props.oneEventsList.date
		var theDateFancy= moment(theDate).format('dddd, MMM Do YYYY - h:mm')
		console.log(theDateFancy)

		return (
			<div className="single-event">
						{this._eachPictureTemplate()}
						<h1>{oneEvents.name}</h1>
			      <img src={oneEvents.image} alt="..."/>
			      <div className="single-event-caption">
			        <h3>{theDateFancy}</h3>
							<h3>{oneEvents.venue}</h3>
							<p>{oneEvents.description}</p>
			        <p><a href="#" className="btn btn-primary" role="button">Save to my Favorites</a></p>
			      </div>
			  </div>


		)
	}
})
