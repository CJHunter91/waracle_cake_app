import React, { Component } from 'react';
import AjaxRequest from '../services/AjaxRequest'

class ShowCake extends Component {


	setCakeData(data){
		this.setState({ cakeData:data })
	}
	componentWillMount(){
		this.setState({ cakeData:[] })
	}
	componentDidMount(){
		const ajaxRequest = new AjaxRequest("http://ec2-52-209-201-89.eu-west-1.compute.amazonaws.com:5000/api/cakes/" + this.props.match.params.cakeID)
		ajaxRequest.get(this.setCakeData.bind(this))
	}

  	render() {
    	return (
    		<article id="show-cake">
    			<img alt="A tasty cake" className="image" src={this.state.cakeData.imageUrl}/>
				<h4>{this.state.cakeData.name} Rated: {this.state.cakeData.yumFactor}</h4>
				<label>Comment:</label>
				<p>{this.state.cakeData.comment}</p>
    		</article>
    	);
  	}
}

export default ShowCake;