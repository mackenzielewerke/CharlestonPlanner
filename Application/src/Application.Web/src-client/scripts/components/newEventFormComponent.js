import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'

export const NewEventFormComponent = React.createClass({
	getInitialState: function(){
		return {
			imagePrevUrl: 'http://9762-presscdn-0-23.pagely.netdna-cdn.com/wp-content/plugins/foundry-customposts/images/noimage.png'
		}
	},
	//
	// _handleNewEventItem: function(evt){
	// 	evt.preventDefault();
	// 	let formEl = evt.target
	// 	let formValsObj = {
	// 		name : formEl.inputName.value,
	// 		date : formEl.inputDate.value,
	// 		venue : this.inputVenue.imgPreviewLink,
	// 		picture : formEl.inputPicture.value
	// 	}
	//
	// 	ACTIONS.saveNewShout(formValsObj)
	//
	// },

	_handleImgPrevClick: function(evt){
		evt.preventDefault();
		let imgElement = this.refs.previewImg
		console.log(imgElement.value)
		if (imgElement.value.length > 0){
			this.setState({
				imagePrevUrl: imgElement.value
			})
		}else{
			this.setState({
				imagePrevUrl: 'http://9762-presscdn-0-23.pagely.netdna-cdn.com/wp-content/plugins/foundry-customposts/images/noimage.png'
			})
		}
	},

	_validateName: function(formDomEl){
		let nameValue=formDomEl.inputName.value
		let flashMsgEl=document.querySelector('.name.flash-msg')
		if(nameValue.length < 1){
			flashMsgEl.innerHTML= "You must enter the event's name"
		}
	},

	_validateDate: function(formDomEl){
		let dateValue=formDomEl.inputDate.value
		let flashMsgEl=document.querySelector('.date.flash-msg')
		if(dateValue.length < 1){
			flashMsgEl.innerHTML= "You must enter the event's date"
		}
	},

	_validateVenue: function(formDomEl){
		let venueValue=formDomEl.inputVenue.value
		let flashMsgEl=document.querySelector('.venue.flash-msg')
		if(venueValue.length < 1){
			flashMsgEl.innerHTML= "You must enter the event's venue"
		}
	},

	_validateDescription: function(formDomEl){
		let descriptionValue=formDomEl.inputDescription.value
		let flashMsgEl=document.querySelector('.description.flash-msg')
		if(descriptionValue.length < 1){
			flashMsgEl.innerHTML= "You must enter the event's description"
		}
	},

	_validatePicture: function(formDomEl){
		let pictureValue=formDomEl.inputPicture.value
		let flashMsgEl=document.querySelector('.picture.flash-msg')
		if(pictureValue.length < 1){
			flashMsgEl.innerHTML= "You must enter the event's picture"
		}
	},


	_handleSubmit: function(evt){
		evt.preventDefault()
		console.log("CLICKKKK")
		console.log(evt.target)
		let formEl=evt.target

		this._validateName(formEl)
		this._validateDate(formEl)
		this._validateVenue(formEl)
		this._validateDescription(formEl)
		this._validatePicture(formEl)
	},

	render: function(){
		return (
<div className="my-form">
  <h1 className="spaced-out">Add Your Own Event </h1>

  <form onSubmit={this._handleSubmit}>
    <div className="form-section">
      <h4>Name of Event </h4>
      <input type="text" className="form-control" name="inputName"/>
			<p className="name flash-msg"> </p>
		</div>


    <div className="form-section">
      <h4>Date </h4>
      <input type="text" className="form-control" name="inputDate"/>
			<p className="date flash-msg"> </p>
    </div>

    <div className="form-section">
      <h4>Venue </h4>
      <input type="text" className="form-control" name="inputVenue"/>
			<p className="venue flash-msg"> </p>
    </div>

    <div className="form-section">
      <h4>Description </h4>
      <input type="text" className="form-control description-input" name="inputDescription"/>
			<p className="description flash-msg"> </p>
		</div>

		<div className="form-section">
      <h4>Upload Picture (URLs only)</h4>
      <input ref="previewImg" type="text" className="form-control" name="inputPicture"/>
			<div className="add-img" onClick={this._handleImgPrevClick}>Add Image</div>
			<p className="picture flash-msg"> </p>
		</div>
		<div className="preview-img">
			<img src={this.state.imagePrevUrl}/>
		</div>


		<div className="button-div">
    	<button className="submit-button" type="submit">Register</button>
		</div>
  </form>




  </div>
    )
  }
})
