import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'
import {RegularNavComponent} from '../components/unauthenticated-nav.js'
import {SearchBarComponent} from '../components/searchbar.js'
import {ThumbnailEventListComponent} from '../components/thumbnailEventListComponent.js'
import {SearchEventListComponent} from '../components/SearchComponent.js'
import {ACTIONS} from '../actions.js'
import {STORE} from '../store.js'

export const SearchPageView = React.createClass({

	getInitialState: function(){
		return STORE.getStoreData()
	},

	componentDidMount: function(){
		let component = this;
		console.log('ACTIONS.fetch()...')
		ACTIONS.fetchAllEvents()

	},


	render: function(){
		// console.log('data??', this.props.eventsList)
		// console.log(this.state.eventsList.length)
		if (this.state.eventsList.length < 1){
		console.log("executing")
		return <p> loading </p>
		}
		return (
      <div>
					<SearchBarComponent/>
					<SearchEventListComponent eventsList={this.state.eventsList} eventsSearchList={this.state.eventsSearchList}/>
      </div>
		)
	}
})
