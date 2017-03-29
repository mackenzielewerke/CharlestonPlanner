import Backbone from 'backbone'

// export const PretendEventsModel = Backbone.Model.extend({
// 	url: 'https://api.myjson.com/bins/drz1f',
// 	// idAttribute: '_id'
// })
//
// export const PretendEventsCollection = Backbone.Collection.extend({
// 	model: PretendEventsModel
// })


export const EventsModel= Backbone.Model.extend({
	urlRoot: 'api/events',
	idAttribute: 'id'
})

export const SaveEventsModel = Backbone.Model.extend({

	url: function(id){
		return `api/events/${id}/save`
	}

})

export const EventsCollection= Backbone.Collection.extend({
	model: EventsModel,
	url: 'api/events'

})
