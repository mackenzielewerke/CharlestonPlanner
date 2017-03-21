// import React from 'react';
// import {Navbar} from './components/component-navbar.js';
// import {STORE} from './store.js';
// import {ACTIONS} from './actions.js';
//
// import {HomePageView} from './views/homeView.js'
// import {EventsPageView} from './views/thumbnailView.js'
// import {SingleEventView} from './views/singleEventView.js'
// import {RegistrationFormView} from './views/registrationFormView.js'
// import {LoginFormView} from './views/loginFormView.js'
// import {NewEventFormView} from './views/newEventFormView.js'
//
// export const ViewController = React.createClass({
//
// 	getInitialState: function(){
// 		ACTIONS.changeCurrentNav(this.props.fromRoute, window.location.hash)
// 		let storeObject = STORE.getStoreData()
// 		return storeObject
// 	},
//
// 	componentDidMount: function(){
// 		let component = this;
//
// 	   STORE.onStoreChange(function(){
// 			// console.log("STATE CHANGED!")
// 			let newStoreObj = STORE.getStoreData()
// 			component.setState(newStoreObj)
// 		})
//
// 		ACTIONS.fetchCurrentUser()
//
// 	},
//
// 	render: function(){
//
// 		let componentToRender
//
// 		switch(this.state.currentNavRoute){
// 			case "HOME":
// 				componentToRender = <homeView {...this.state}/>
// 				break;
// 			case "EVENTS":
// 				componentToRender = <EventsPageView {...this.state}/>
// 				break;
// 			case "SINGLE":
// 				componentToRender = <singleEventView {...this.state}/>
// 				break;
// 			case "REGISTER":
// 				componentToRender = <RegistrationFormView {...this.state}/>
// 				break;
// 			case "LOGIN":
// 				componentToRender = <loginFormView {...this.state}/>
// 				break;
// 			case "NEW":
// 				componentToRender = <NewEventFormView {...this.state}/>
// 				break;
//
//
//  			default:
// 		}
//
// 		// console.log('APP STATE', this.state)
// 		return (
// 			<div>
// 				<Navbar { ...this.state }/>
// 				{componentToRender}
// 			</div>
// 		)
// 	}
// })
