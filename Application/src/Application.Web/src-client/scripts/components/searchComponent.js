import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'
import {SearchBarComponent} from './searchbar.js'

export const SearchEventListComponent = React.createClass({

	_handleDetailedViewClick: function(evt){
		console.log("THISS EVENNNNTT??")
		let clickedIconEl=evt.currentTarget
		console.log(clickedIconEl.dataset.itemid, 'item idddd')
	window.location.hash = `events/${clickedIconEl.dataset.itemid}`
	},

	getInitialState: function(){
    return {
      showAlert: false
    }
  },


  _removeModal: function(){
    this.setState({showAlert: false})

  },

	_renderAlert: function(){
	if(this.state.showAlert===true){
		return(
			<div className="modal-wrapper">
				<div className="modal">
					<h1>Please Register or Sign In</h1>
					<p>Must have an account to save events.</p>
				</div>
			</div>
		)
	}
},


_handleButtonClick: function(evt){
	console.log("CLICKKK")
	this.setState({showAlert: true})
		this._renderAlert


},

// 	_clickSearch: function(evt){
// 		let component= this
// 		console.log("search click")
// 		let searchBarVal=this.refs.inputSearch.value
// 		console.log(searchBarVal)
//
// 		let filteredEvents = component.props.eventsList.filter(function(obj, i){
//
// 			if(obj.name.includes(searchBarVal)){
// 				console.log("this one", obj)
// 				return true
// }
// })
// },

_makeEventComponents: function(listOfEvents){
	let arrayOfEventsComponents= filteredEvents.map(function (eachEventObj, i){

		return (
			<EachEvent eventData= {eachEventObj} key= {i}/>
		)
	})

	return arrayOfEventsComponents
	// console.log(arrayOfEventsComponents)
},

render: function(){
	let allTheSearchEvents=this.filteredEvents


	// console.log("all the events", allTheEvents)
	return (
<div className="all-search-events">
	<div className="row">
			<EachEvent/>
		</div>
			{this._makeEventComponents(allTheSearchEvents)}
</div>
	)
}
})

export const EachEvent= React.createClass({

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
		      <img src="http://www.shockmansion.com/wp-content/myimages/2016/03/rr231.jpg" alt="..."/>
		      <div className="caption">
		        <h4>{this.props.eventData.name}</h4>
		        <p>{theDateFancy}</p>
						<p>{this.props.eventData.venue}</p>
						</div>
					</div>
		        <p><a className="btn btn-primary" role="button" onClick={this._handleButtonClick}>Save to my Favorites</a></p>
		  </div>

			)
		}
})


//
// export const SearchComponent= React.createClass({
//
// _clickSearch: function(evt){
//   let component= this
//   console.log("search click")
//   let searchBarVal=this.refs.inputSearch.value
//   console.log(searchBarVal)
//
//
//   console.log(filteredEvents)
//
//   let filteredEvents = component.props.eventsList.filter(function(obj, i){
//
//     if(obj.name.includes(searchBarVal)){
//       console.log("this one", obj)
//       return true
//     }
//   })
//
//   _makeEventComponents: function(listOfEvents){
//   	let arrayOfEventsComponents= filteredEvents.map(function (eachEventObj, i){
//
//   		return (
//   			<EachEvent eventData= {eachEventObj} key= {i}/>
//   		)
//   	})
//
//   	return arrayOfEventsComponents
//   	// console.log(arrayOfEventsComponents)
//   },
//   render: function(){
//   	let allTheEvents=this.props.eventsList
// },
//
// return (
//   <div className= "all-search-events">
//     <div className="searchbar">
//       <h3 className="spaced-out">Search Events</h3>
//       <div className="input">
//         <input ref="inputSearch" className="search-input spaced-out" type="text" name="search"></input>
//         <button className="spaced-out search-button" onClick= {this._clickSearch} type=" submit" name="button">Search</button>
//         <button className="spaced-out button-all-events" onClick={this._handleClickAllEvents} type=" submit" name="button">All Events</button>
//       </div>
//     </div>
//
//
//   </div>
// )
// }
//
//
//
//
// export const SearchComponent= React.createClass({
//
//
//
//
//
//
//
//
// render: function(){
//   return (
//
//     <div className="col-sm-6 col-md-3">
//       <div className="thumbnail" data-itemid={this.props.eventData.id} onClick={component._handleDetailedViewClick}>
//         <img src="http://www.shockmansion.com/wp-content/myimages/2016/03/rr231.jpg" alt="..."/>
//         <div className="caption">
//           <h4>{this.props.eventData.name}</h4>
//           <p>{theDateFancy}</p>
//           <p>{this.props.eventData.venue}</p>
//           </div>
//         </div>
//           <p><a className="btn btn-primary" role="button" onClick={this._handleButtonClick}>Save to my Favorites</a></p>
//     </div>
//
//   )
//
//
//
//
// })
