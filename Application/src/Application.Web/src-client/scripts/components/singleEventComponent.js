import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'
import moment from 'moment'
import {ACTIONS} from '../actions.js'


export const SingleEventComponent = React.createClass({

	getInitialState: function(){
		return{
			buttonMsg: "Save to Favorites"
		}
	},

	_handleSaveEvent: function(evt){
		console.log('console logging evt', evt)
		this.setState({buttonMsg: "Saved to Favorites"})
		let crntID = window.location.hash
		crntID = crntID.split('/')[1]
		console.log(crntID)
		ACTIONS.fetchSingleEventToSave(crntID)
		// ACTIONS.saveNewEvent(evt)
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
						 <button onClick={this._handleSaveEvent} className="btn btn-primary" role="button">{this.state.buttonMsg}</button>
					 </div>
			 </div>
		)
	}
})
