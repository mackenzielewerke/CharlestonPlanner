import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'

export const FooterComponent = React.createClass({


  render: function(){
    return(
      <div className="footer">
        <p>&#169; 2017 The Charleston Planner. Website by Cameron Bolus, Shannon McNellis, and Mackenzie Lewerke.</p>
      </div>

    )
  }
})
