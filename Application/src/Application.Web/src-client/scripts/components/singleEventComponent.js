import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'
import moment from 'moment'




export const SingleEventComponent = React.createClass({

	_handleSaveEvent: function(evt){

		console.log('save events click', evt.target.value)
		alert('Event has been saved to your favorites!')
	},

	render: function(){
		console.log('props passing single event',this.props.singleEvent.singleEvent)
		let oneEvent=this.props.singleEvent.singleEvent
		console.log('one event', oneEvent)
		let theDate= oneEvent.date
		var theDateFancy= moment(theDate).format('dddd, MMM Do YYYY - h:mm')

		return (
			<div className="single-event">
					 <h1>{oneEvent.name}</h1>
					 <img src={oneEvent.image} alt="..."/>
					 <div className="single-event-caption">
						 <h3>{theDateFancy}</h3>
						 <h3>{oneEvent.venue}</h3>
						 <p>{oneEvent.description}</p>
						 <button onClick={this._handleSaveEvent} className="btn btn-primary" role="button">Save to my Favorites</button>
					 </div>
			 </div>
		)
	}
})
