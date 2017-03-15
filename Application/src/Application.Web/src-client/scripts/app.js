import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'
import {HomePageView} from './views/homeView.js'

const AppRouter = Backbone.Router.extend({
	initialize: function(){
		Backbone.history.start()
	},

  routes: {
    "" : "showHomePage",
    "events" : "showEventsPage",
    "events/:id" : "showSingleEvent",
    "events/new": "showNewEventForm",
    "account/login": "showLoginPage",
    "account/register": "showRegisterPage",
    "account/:id": "showAccountPage",
    "account/:id/edit": "showEditAccountPage"
  },

	showHomePage: function(){
		ReactDOM.render(<HomePageView/>, document.querySelector('#app-container'))
	},

})

	new AppRouter()
