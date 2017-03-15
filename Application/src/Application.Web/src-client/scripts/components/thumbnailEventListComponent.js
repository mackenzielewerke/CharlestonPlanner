import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'



export const ThumbnailEventListComponent = React.createClass({
	render: function(){
		return (
			<div className="row">
			  <div className="col-sm-6 col-md-4">
			    <div className="thumbnail">
			      <img src="http://www.shockmansion.com/wp-content/myimages/2016/03/rr231.jpg" alt="..."/>
			      <div className="caption">
			        <h3>Event Name</h3>
			        <p>Event Date</p>
							<p>Event Location</p>
			        <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
			      </div>
			    </div>
			  </div>

				<div className="col-sm-6 col-md-4">
			    <div className="thumbnail">
			      <img src="http://www.shockmansion.com/wp-content/myimages/2016/03/rr231.jpg" alt="..."/>
			      <div className="caption">
			        <h3>Event Name</h3>
			        <p>Event Date</p>
							<p>Event Location</p>
			        <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
			      </div>
			    </div>
			  </div>

				<div className="col-sm-6 col-md-4">
			    <div className="thumbnail">
			      <img src="http://www.shockmansion.com/wp-content/myimages/2016/03/rr231.jpg" alt="..."/>
			      <div className="caption">
			        <h3>Event Name</h3>
			        <p>Event Date</p>
							<p>Event Location</p>
			        <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
			      </div>
			    </div>
			  </div>
			</div>
		)
	}
})
