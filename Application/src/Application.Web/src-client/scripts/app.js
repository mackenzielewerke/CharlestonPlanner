import ReactDOM from 'react-dom'
import React from 'react'
import {ViewController} from './viewController.js'

if(window.location.hostname === 'localhost'){
    let headEl = document.querySelector('head')
    let linkEl = document.querySelector('link[href="./css/styles.css"]')
    headEl.removeChild(linkEl)
}

ReactDOM.render(<ViewController/>, document.querySelector('#app-container'))
// import {HomePageView} from './views/homeView.js'
// import {EventsPageView} from './views/thumbnailView.js'
// import {SingleEventView} from './views/singleEventView.js'
// import {RegistrationFormView} from './views/registrationFormView.js'
// import {LoginFormView} from './views/loginFormView.js'
// import {NewEventFormView} from './views/newEventFormView.js'
//

//
// const AppRouter = Backbone.Router.extend({
// 	initialize: function(){
// 		Backbone.history.start()
// 	},
//
//   routes: {
//     "" : "showHomePage",
//     "events" : "showEventsPage",
// 		"events/new": "showNewEventForm",
//     "events/:id" : "showSingleEvent",
//     "accounts/login": "showLoginPage",
//     "accounts/register": "showRegisterPage",
//     "accounts/:id": "showAccountPage",
//     "accounts/:id/edit": "showEditaccountsPage"
//   },
//
// 	showHomePage: function(){
// 		ReactDOM.render(<HomePageView/>, document.querySelector('#app-container'))
// 	},
//
// 	showEventsPage: function(){
// 		ReactDOM.render(<EventsPageView/>, document.querySelector('#app-container'))
// 	},
//
// 	showSingleEvent: function(){
// 		ReactDOM.render(<SingleEventView/>, document.querySelector('#app-container'))
// 	},
//
// 	showRegisterPage: function(){
// 		ReactDOM.render(<RegistrationFormView/>, document.querySelector('#app-container'))
//
// 	},
//
// 	showLoginPage: function(){
// 		ReactDOM.render(<LoginFormView/>, document.querySelector('#app-container'))
// 	},
//
// 	showNewEventForm: function(){
// 		ReactDOM.render(<NewEventFormView/>, document.querySelector('#app-container'))
// }
//
// // *****
// // showHomePage: function(){
// //   ReactDOM.render(<ViewController fromRoute="{HOME}" />, document.querySelector('#app-container'))
// // },
// //
// // showEventsPage: function(){
// //   ReactDOM.render(<ViewController fromRoute="{EVENTS}"/>, document.querySelector('#app-container'))
// // },
// //
// // showSingleEvent: function(){
// //   ReactDOM.render(<ViewController fromRoute= "{SINGLE}"/>, document.querySelector('#app-container'))
// // },
// //
// // showRegisterPage: function(){
// //   ReactDOM.render(<ViewController fromRoute="{REGISTER}"/>, document.querySelector('#app-container'))
// //
// // },
// //
// // showLoginPage: function(){
// //   ReactDOM.render(<ViewController fromRoute="{LOGIN}"/>, document.querySelector('#app-container'))
// // },
// //
// // showNewEventForm: function(){
// //   ReactDOM.render(<ViewController fromRoute= "{NEW}"/>, document.querySelector('#app-container'))
// // }
//
// })
//
// 	new AppRouter()
