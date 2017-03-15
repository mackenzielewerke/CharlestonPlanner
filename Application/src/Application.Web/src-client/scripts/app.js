import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'
import {HomePageView} from './views/homeView.js'
import {EventsPageView} from './views/thumbnailView.js'
import {SingleEventView} from './views/singleEventView.js'
import {FormView} from './views/formView.js'

const AppRouter = Backbone.Router.extend({
	initialize: function(){
		Backbone.history.start()
	},

  routes: {
    "" : "showHomePage",
    "events" : "showEventsPage",
		"events/new": "showNewEventForm",
    "events/:id" : "showSingleEvent",
    "account/login": "showLoginPage",
    "account/register": "showRegisterPage",
    "account/:id": "showAccountPage",
    "account/:id/edit": "showEditAccountPage"
  },

	showHomePage: function(){
		ReactDOM.render(<HomePageView/>, document.querySelector('#app-container'))
	},

	showEventsPage: function(){
		ReactDOM.render(<EventsPageView/>, document.querySelector('#app-container'))
	},

	showSingleEvent: function(){
		ReactDOM.render(<SingleEventView/>, document.querySelector('#app-container'))
	},

	showNewEventForm: function(){
		ReactDOM.render(<FormView/>, document.querySelector('#app-container'))

	}

})

	new AppRouter()
