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

		STORE.onStoreChange(function(){
			component.setState( STORE.getStoreData() )
		})

		ACTIONS.fetchAllEvents()


	},


	render: function(){
		return (
      <div>
			     <RegularNavComponent/>
           <SearchBarComponent/>
					 <ThumbnailEventListComponent/>


      </div>
		)
	}
})
