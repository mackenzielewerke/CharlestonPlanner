import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'
import {AccountsPageComponent} from '../components/accountsComp.js'
import {ACTIONS} from '../actions.js'
import {STORE} from '../store.js'

export const AccountsPageView = React.createClass({

  getInitialState: function(){
    return STORE.getStoreData()
  },

  componentDidMount: function(){
    let component = this;
    console.log('ACTIONS.fetch()...')
    ACTIONS.fetchAllEvents()

  },

  render: function(){

    return(
      <div>
        <AccountsPageComponent eventsList={this.state.eventsList}/>
      </div>
    )

  }

})
