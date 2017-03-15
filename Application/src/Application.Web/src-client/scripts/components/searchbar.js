import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'

export const SearchBarComponent = React.createClass({
	render: function(){
		return (
			<div className="searchbar">
        <div className="spaced-out">Search Events</div>
        <form>
          <input className="search-input spaced-out" type="text" name=""></input><button className="spaced-out" type=" submit" name="button">Search</button>
        </form>
      </div>
		)
	}
})
