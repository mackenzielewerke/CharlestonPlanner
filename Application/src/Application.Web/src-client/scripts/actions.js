import Backbone from 'backbone';
import {EventsModel, EventsCollection} from './models/model-events.js'
import {STORE} from './store.js'

export const ACTIONS = {

  saveNewEvent: function(userFormEntry){
    let newEventInstance= new EventsModel()
    newEventInstance.set(userFormEntry)
    newEventInstance.save().then(function(serverRes){
      ACTIONS.fetchAllEvents()
    })
  },

  fetchAllEvents: function(){

  let eventsCollInstance = new EventsCollection()
    eventsCollInstance.fetch().then(function(serverRes){
    console.log('shout data', serverRes)
    STORE.setStore('eventsList', serverRes)
  })
}

}
