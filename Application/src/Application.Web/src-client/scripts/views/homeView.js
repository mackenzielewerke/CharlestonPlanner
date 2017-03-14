import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'
import {RegularNavComponent} from '../components/unauthenticated-nav.js'
import {SearchBarComponent} from '../components/searchbar.js'

export const HomePageView = React.createClass({
	render: function(){
		return (
      <div>
			     <RegularNavComponent/>
           <SearchBarComponent/>
           <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/BroadStreetCharleston.jpg" alt=""></img>
      </div>
		)
	}
})
