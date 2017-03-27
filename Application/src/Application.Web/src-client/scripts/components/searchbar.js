import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'
import {STORE} from '../store.js'
import {ACTIONS} from '../actions.js'

export const SearchBarComponent = React.createClass({

	_handleClickAllEvents: function(evt){
		console.log('click')
		window.location.hash = 'events'
		let empty= ""
		STORE.setStore('searchVal', empty)
		this.refs.inputSearch.value=""


	},

//
	_clickSearch: function(evt){
		let component= this
		console.log("search click")
		let searchBarVal=this.refs.inputSearch.value
		console.log(searchBarVal)
			STORE.setStore('searchVal', searchBarVal)
			window.location.hash = 'events'


},


	render: function(){
		return (
			<div className="searchbar">
        <h3 className="spaced-out">Search Events</h3>
        <div className="input">
          <input type="text" ref="inputSearch" className="search-input spaced-out" type="text" name="search"></input>
					<button className="spaced-out search-button" onClick= {this._clickSearch} type=" submit" name="button">Search</button>
					<button className="spaced-out button-all-events" onClick={this._handleClickAllEvents} type=" submit" name="button">All Events</button>
        </div>
      </div>
		)
	}
})
