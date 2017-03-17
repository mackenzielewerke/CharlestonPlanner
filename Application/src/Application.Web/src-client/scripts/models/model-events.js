import Backbone from 'backbone'


export const EventsModel = Backbone.Model.extend({
	urlRoot: 'https://api.myjson.com/bins/drz1f',
	idAttribute: '_id'
})

export const EventsCollection = Backbone.Collection.extend({
	model: EventsModel,
	url: 'https://api.myjson.com/bins/drz1f'
})
