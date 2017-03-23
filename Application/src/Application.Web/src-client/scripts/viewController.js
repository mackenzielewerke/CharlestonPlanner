import React from 'react';
import {RegularNavComponent} from './components/unauthenticated-nav.js';
import {STORE} from './store.js';
import {ACTIONS} from './actions.js';
import {AppRouter} from './routes.js'
import {AuthenticatedNavComponent} from './components/authenticated-nav.js';
import {HomePageView} from './views/homeView.js'
import {EventsPageView} from './views/thumbnailView.js'
import {SingleEventView} from './views/singleEventView.js'
import {RegistrationFormView} from './views/registrationFormView.js'
import {LoginFormView} from './views/loginFormView.js'
import {NewEventFormView} from './views/newEventFormView.js'
import {AccountsPageView} from './views/accountsView.js'


export const ViewController = React.createClass({

	getInitialState: function(){
		// ACTIONS.changeCurrentNav(this.props.fromRoute, window.location.hash)
		let storeObject = STORE.getStoreData()
		return storeObject
	},

  componentWillMount: function(){
    let component = this;
    // console.log('initializing store listener???')
    STORE.onStoreChange(function(){
      let newStoreObj = STORE.getStoreData()
      // console.log("STATE CHANGED!", newStoreObj )

      component.setState(newStoreObj)
    })

    new AppRouter()

    ACTIONS.fetchCurrentUser()

  },

  _getNavBar: function(currentUser){
		let navBar = <RegularNavComponent/>

		if(typeof currentUser.email !== 'undefined'){
			navBar = <AuthenticatedNavComponent/>
		}

		return navBar
	},

	render: function(){
		let componentToRender
    // console.log('ViewController.state.currentView: ', this.state.currentView)
		switch(this.state.currentView){
			case "HOME":
        console.log('hey')
				componentToRender = <HomePageView/>
				break;
			case "EVENTS":
				componentToRender = <EventsPageView/>
				break;
			case "SINGLE":
				componentToRender = <SingleEventView {...this.state}/>
				break;
			case "REGISTER":
        console.log('register')
				componentToRender = <RegistrationFormView/>
				break;
			case "LOGIN":
        console.log('login')
				componentToRender = <LoginFormView/>
				break;
			case "NEW":
				componentToRender = <NewEventFormView/>
				break;
			case "ACCOUNT":
				componentToRender = <AccountsPageView/>
				break;


 			default:
		}

		// console.log('APP STATE', this.state)
		return (
			<div>
				{ this._getNavBar(this.state.currentUser) }
				{componentToRender}
			</div>
		)
	}
})
