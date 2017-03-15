import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'

export const SearchBarComponent = React.createClass({
	render: function(){
		return (
			<div className="searchbar">
        <div>Search Events</div>
        <form>
          <input className="search-input" type="text" name="" value=""></input><button type="submit" name="button">Search</button>
        </form>
      </div>
		)
	}
})
