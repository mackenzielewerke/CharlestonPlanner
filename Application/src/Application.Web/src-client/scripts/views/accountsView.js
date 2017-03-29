import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'
import {AccountsPageComponent} from '../components/accountsComp.js'
import {ACTIONS} from '../actions.js'
import {STORE} from '../store.js'
import {FooterComponent} from '../components/footerComp.js'


export const AccountsPageView = React.createClass({

  getInitialState: function(){
    return STORE.getStoreData()
  },

  componentDidMount: function(){
    let component = this;
    console.log('ACTIONS.fetch()...')
    // ACTIONS.fetchSavedEvent()

  },

  render: function(){

    return(
      <div>
        <AccountsPageComponent eventsList={this.state.eventsList}/>
        {/* <FooterComponent/> */}
      </div>
    )

  }

})
