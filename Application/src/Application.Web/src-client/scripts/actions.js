import Backbone from 'backbone';
import {EventsModel, EventsCollection} from './models/model-events.js'


export const ACTIONS = {

  fetchAllEvents: function(){

  let eventsCollInstance = new EventsCollection()
    eventsCollInstance.fetch().then(function(serverRes){
    console.log('shout data', serverRes)
    // STORE.setStore('shoutOutList', serverRes)
  })
}

}
