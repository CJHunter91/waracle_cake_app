import React, { Component } from 'react';

class CakeForm extends Component {

	constructor(props){
		super(props);
		this.state ={
			name: null,
			imageUrl: null,
			comment: null,
			yumFactor: null,
		}
		this.changeFormState = this.changeFormState.bind(this);
	}

	changeFormState(e){
		this.setState({[e.target.name]: e.target.value})
		console.log(e.target.value, e.target.name)
	}

  	render() {
    	var array = [1,2,3,4,5]

	return(
		<section id="cake-input">
		<form id="cake-form">
			<label>Name:</label>
			<input type="text" name="name" onChange={this.changeFormState}/>
			<label>Image Url:</label>
			<input type="url" name="imageUrl" onChange={this.changeFormState}/>
			<label>Yum Factor</label>
			<select name="yumFactor" onChange={this.changeFormState}>
				{array.map((number) =>{
					return(
						<option key={number} value={number}>{number}</option>
						)
				})}
			</select>
			<input type="submit" value="Add Cake" />
		</form>
			<textarea name="comment" form="cake-form" placeholder="Enter comment here..." onChange={this.changeFormState}>
			</textarea>
		</section>
		)
  	}
}

export default CakeForm;
