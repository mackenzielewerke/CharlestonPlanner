import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'
import {STORE} from '../store.js';
import moment from 'moment'

export const AccountsPageComponent = React.createClass({

  _handleCreateNewEvent: function(){
    window.location.hash = 'events/new'
  },

  _handleDetailedViewClick: function(evt){
		console.log("THISS EVENNNNTT??")
		let clickedIconEl=evt.currentTarget
		console.log(clickedIconEl.dataset.itemid, 'item idddd')
	  window.location.hash = `events/${clickedIconEl.dataset.itemid}`
	},

  _makeEventComponents: function(listOfEvents){
  	let arrayOfEventsComponents= listOfEvents.map(function (eachEventObj, i){

  		return (
  			<EachAccountsEvent eventData= {eachEventObj} key= {i}/>
  		)
  	})
  	return arrayOfEventsComponents.slice(0,6)
  	console.log('array of components', arrayOfEventsComponents)
  },


  render: function(){
    console.log('events list prop', this.props.eventsList)
    let allTheEvents=this.props.eventsList
    console.log('all events', allTheEvents)


    return(

      <div className="accounts-body">
        <h3 className="spaced-out middle">Welcome to your Account</h3>
        <button type="button" name="button" onClick={this._handleCreateNewEvent}>Create New Event</button>
        <h3 className="spaced-out">Favorite Events:</h3>
        <div></div>
        <div>
          <div className="row">
            <EachAccountsEvent/>
          </div>
            {this._makeEventComponents(allTheEvents)}
          </div>
        </div>

    )
  }
})

export const EachAccountsEvent= React.createClass({

	_handleDetailedViewClick: function(evt){

		let clickedIconEl=evt.currentTarget
		STORE.setStore('singleEvent', clickedIconEl.dataset.itemid)

		console.log(clickedIconEl.dataset.itemid)
	window.location.hash = `events/${clickedIconEl.dataset.itemid}`
	},

	render: function(){
		// console.log(this.props.eventData, 'event data')
		let component=this
		if (this.props.eventData===undefined){
			return <h1></h1>
		}

		let theDate= this.props.eventData.date
		var theDateFancy= moment(theDate).format('dddd, MMM Do YYYY - h:mm')
		// console.log(theDateFancy)

		// let displayName = this.props.eventData.name
		// let newDisplayName = displayName.slice(0,30)
		//
		// if(newDisplayName.length >= 30){
		// 	newDisplayName += '...'
		// }

			return (



		  <div className="col-sm-6 col-md-3">
		    <div className="thumbnail" data-itemid={this.props.eventData.id} onClick={component._handleDetailedViewClick}>
		      <img src={this.props.eventData.image} alt="..."/>
		      <div className="caption">
		        <h4>{this.props.eventData.name}</h4>
		        <p>{theDateFancy}</p>
						<p>{this.props.eventData.venue}</p>
						</div>
					</div>
		        <p><a className="btn btn-primary" role="button" onClick={this._handleButtonClick}>Saved to Favorites</a></p>
		  </div>

			)
		}
})
