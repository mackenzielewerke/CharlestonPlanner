import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'
import {RegularNavComponent} from '../components/unauthenticated-nav.js'
import {SearchBarComponent} from '../components/searchbar.js'
import {ThumbnailEventListComponent} from '../components/ThumbnailEventListComponent.js'
import {SingleEventComponent} from '../components/SingleEventComponent.js'
import {STORE} from '../store.js'
import {ACTIONS} from '../actions.js'

export const SingleEventView = React.createClass({

	getInitialState: function(){
		return STORE.getStoreData()
	},

	componentDidMount: function(){
		let component = this;

		ACTIONS.fetchAllEvents()


	},

	render: function(){
		let component= this
		console.log(this.props, "single view props??????????")
		console.log('data??', this.props.oneEventsList)
		console.log(this.state.eventsList.length)
		let singleEventInfo = this.props.eventsList.filter(function(obj, i){
			if(parseInt(component.props.singleEvent) === i){
				return true
			}
		})[0]
		// [{eventInfo: a;ldskfja;sdlf}]
		// let singleEventInfo = {}
		if (this.state.eventsList.length < 1){
			console.log(this.props.oneEventsList)
		console.log("executing")
		return <p> loading </p>
		}
		return (
      <div>
           <SearchBarComponent/>
					 <SingleEventComponent oneEventsList={this.state.eventsList.id}/>


      </div>
		)
	}
})
