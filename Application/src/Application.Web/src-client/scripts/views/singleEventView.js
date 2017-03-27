import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'
import {RegularNavComponent} from '../components/unauthenticated-nav.js'
import {SearchBarComponent} from '../components/searchbar.js'
import {ThumbnailEventListComponent} from '../components/ThumbnailEventListComponent.js'
import {SingleEventComponent} from '../components/SingleEventComponent.js'
import {FooterComponent} from '../components/footerComp.js'

import {STORE} from '../store.js'
import {ACTIONS} from '../actions.js'

export const SingleEventView = React.createClass({

	componentDidMount: function(){
		let component = this;

		// ACTIONS.fetchAllEvents()
		console.log('fetching single event', this.props.routeParams.evtId )
		let eventRecordId = this.props.routeParams.evtId
		ACTIONS.fetchSingleEvent(eventRecordId)
		//ACTIONS.fetchSingleView(:id)

	},

	render: function(){
		let component= this
		console.log(this.props, "single view props??????????")
		console.log(this.props.eventList)
		// console.log('data??', this.props.eventList.id)



	// 	if (this.props.singleEvent.length < 1){
	// 	console.log("executing")
	// 	return <p> loading </p>
	// }
	// let singleEventInfo = this.props.eventsList.filter(function(obj, i){
	// 	if(parseInt(component.props.singleEvent) === i){
	// 		return true
	// 	}
	// })[0]
	// console.log("SHOULD BE THE EVENT", singleEventInfo)

		return (
      <div>
				<SearchBarComponent/>
				<SingleEventComponent singleEvent={this.props}/>
				{/* <FooterComponent/> */}
      </div>
		)
	}
})


//<SingleEventComponent oneEventsList={singleEventInfo}/>
