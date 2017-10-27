import React, { Component } from 'react';
import AjaxRequest from '../services/AjaxRequest'
import {Redirect} from 'react-router-dom'

class CakeForm extends Component {

	constructor(props){
		super(props);
		this.state ={
			name: "",
			imageUrl: "",
			comment: "",
			yumFactor: 1,
			redirect: false
		}
		this.changeFormState = this.changeFormState.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	changeFormState(e){
		this.setState({[e.target.name]: e.target.value})
	}

	handleSubmit(event) {
	    event.preventDefault();
	    const ajaxRequest = new AjaxRequest("http://ec2-52-209-201-89.eu-west-1.compute.amazonaws.com:5000/api/cakes")
	    ajaxRequest.post(this.state)
	    this.setState({redirect: true})
	  }

  	render() {
    	var array = [1,2,3,4,5]
    	const redirect  = this.state.redirect;

     if (redirect) {
       return <Redirect to='/'/>;
     }
	return(
		<section id="cake-input">
		<form id="cake-form"  onSubmit={this.handleSubmit}>
			<label>Name:</label>
			<input type="text" name="name" onChange={this.changeFormState}/>
			<br/>
			<br/>
			<label>Image Url:</label>
			<input type="text" name="imageUrl" onChange={this.changeFormState}/>
			<br/>
			<br/>
			<label>Yum Factor</label>
			<select name="yumFactor" onChange={this.changeFormState}>
				{array.map((number) =>{
					return(
						<option key={number} value={number}>{number}</option>
						)
				})}
			</select>
			<br/>
			<br/>
			
		</form>
			<textarea name="comment" form="cake-form" placeholder="Enter comment here..." onChange={this.changeFormState}>
			</textarea>
			<br/>
			<br/>
			<input type="submit" value="Add Cake" form="cake-form" />
		</section>
		)
  	}
}

export default CakeForm;
