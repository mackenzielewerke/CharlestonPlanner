import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'

export const SearchBarComponent = React.createClass({

	_handleClickAllEvents: function(){
		console.log('click')
		window.location.hash = 'events'
	},

	render: function(){
		return (
			<div className="searchbar">
        <h3 className="spaced-out">Search Events</h3>
        <div className="input">
          <input className="search-input spaced-out" type="text" name=""></input><button className="spaced-out search-button" type=" submit" name="button">Search</button><button className="spaced-out button-all-events" onClick={this._handleClickAllEvents} type=" submit" name="button">All Events</button>
        </div>
      </div>
		)
	}
})
