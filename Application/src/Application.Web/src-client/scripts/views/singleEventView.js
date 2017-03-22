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
		console.log(this.props.singleEvent)
		console.log('data??', this.props.singleEvent)
		let singleEventInfo = this.props.eventsList.filter(function(obj, i){
			if(parseInt(component.props.singleEvent) === i){
				return true
			}
		})[0]
		console.log("SHOULD BE THE EVENT", singleEventInfo)
		if (this.state.singleEvent.length < 1){
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
