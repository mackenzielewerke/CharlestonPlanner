import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'
import {RegularNavComponent} from '../components/unauthenticated-nav.js'
import {SearchBarComponent} from '../components/searchbar.js'
import {NewEventFormComponent} from '../components/newEventFormComponent.js'

export const NewEventFormView = React.createClass({
	render: function(){
		return (
      <div>
           {/* <SearchBarComponent/> */}
					 <NewEventFormComponent/>


      </div>
		)
	}
})
