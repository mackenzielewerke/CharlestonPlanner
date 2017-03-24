export const STORE = {
	_data: {
		eventsList: [],
		searchVal: "",
		singleEvent: "",
		currentView: 'HOME',
		routeParams: {}, //{evtId: 4}
		currentUser: {},
	},

	getStoreData: function(){
		return this._data
	},

	setStore: function(storeProp, payload){

		this._data[storeProp] = payload
		if(typeof this._storeTheData === 'function'){
			this._storeTheData()
		}

	},

	onStoreChange: function(cb){
		this._storeTheData = cb
	}


}
