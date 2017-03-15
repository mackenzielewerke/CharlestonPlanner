import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'
import {RegularNavComponent} from '../components/unauthenticated-nav.js'
import {SearchBarComponent} from '../components/searchbar.js'
// import {SimpleSlider} from '../components/home-carousel.js'

export const HomePageView = React.createClass({
	render: function(){
		return (
      <div>
			     <RegularNavComponent/>
           <SearchBarComponent/>
           <img src="./images/people.jpg" alt=""></img>
				 	{/* <SimpleSlider/> */}
      </div>
		)
	}
})
