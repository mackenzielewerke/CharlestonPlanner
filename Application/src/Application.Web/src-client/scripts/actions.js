import Backbone from 'backbone';
import {EventsModel, EventsCollection} from './models/model-events.js'
import {STORE} from './store.js'
import {UserModel} from './models/model-user.js'


export const ACTIONS = {
  setView: function(viewName){
    // console.log('ACTION updating view:', viewName)
		STORE.setStore('currentView', viewName)
	},

  loginUser: function(credsObj){
    console.log('ACTIONS logging in with  creds:', credsObj)
    UserModel.logIn( credsObj.email , credsObj.password ).then(function(serverRes){
      console.log('User Logged in in!', serverRes)
      //temporary --- need server res to show user data

      STORE.setStore('currentUser', credsObj)

      ACTIONS.routeTo('')
  })
},

  fetchCurrentUser: function(){
    // console.log('Checking for current user...')
    UserModel.getCurrentUser().then(function(serverRes){
      let newStore = serverRes || {}
      STORE.setStore('currentUser',newStore)
  })
},

  logUserOut: function(){
    console.log('logging out..')
    UserModel.logOut().then(function(){
      STORE.setStore('currentUser', {})
      // ACTIONS.routeTo('')

  })
},

  saveNewEvent: function(userFormEntry){
    let newEventInstance= new EventsModel()
    newEventInstance.set(userFormEntry)
    newEventInstance.save().then(function(serverRes){
      ACTIONS.fetchAllEvents()
    })
  },

  fetchAllEvents: function(){
  console.log('new collection instance, and .fetch()')
  let eventsCollInstance = new EventsCollection()
  eventsCollInstance.fetch().then(function(serverRes){
    console.log('events', serverRes)
    STORE.setStore('eventsList', serverRes)
  })
},

  routeTo: function(path){
    window.location.hash = path
  }
}
