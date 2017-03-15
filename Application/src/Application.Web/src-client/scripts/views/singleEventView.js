import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'
import {RegularNavComponent} from '../components/unauthenticated-nav.js'
import {SearchBarComponent} from '../components/searchbar.js'
import {ThumbnailEventListComponent} from '../components/ThumbnailEventListComponent.js'
import {SingleEventComponent} from '../components/SingleEventComponent.js'

export const SingleEventView = React.createClass({
	render: function(){
		return (
      <div>
			     <RegularNavComponent/>
           <SearchBarComponent/>
					 <SingleEventComponent/>


      </div>
		)
	}
})
