export const STORE = {
	_data: {
		eventsList: [],
		currentNavRoute: '',
		currentUser: {}
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
