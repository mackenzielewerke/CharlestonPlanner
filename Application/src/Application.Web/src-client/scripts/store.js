export const STORE = {
	_data: {
		shoutOutList: [],
		shownRatingType: 'PG'
	},

	getStoreData: function(){
		return this._data
	},

	setStore: function(storeProp, payload){
		this._data[storeProp] = payload
		this._storeTheData()
	},

	onStoreChange: function(cb){
		this._storeTheData = cb
	}


}
