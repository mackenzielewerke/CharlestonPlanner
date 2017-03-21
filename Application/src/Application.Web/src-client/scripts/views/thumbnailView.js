import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'
import {RegularNavComponent} from '../components/unauthenticated-nav.js'
import {SearchBarComponent} from '../components/searchbar.js'
import {ThumbnailEventListComponent} from '../components/ThumbnailEventListComponent'
import {ACTIONS} from '../actions.js'
import {STORE} from '../store.js'

export const EventsPageView = React.createClass({

	getInitialState: function(){
		return STORE.getStoreData()
	},

	componentDidMount: function(){
		let component = this;

		ACTIONS.fetchAllEvents()

	},


	render: function(){
		console.log('data??', this.props.eventsList)
		console.log(this.state.eventsList.length)
		if (this.state.eventsList.length < 1){
		console.log("executing")
		return <p> loading </p>
		}
		return (
      <div>
           <SearchBarComponent/>
					 <ThumbnailEventListComponent eventsList={this.state.eventsList}/>


      </div>
		)
	}
})
