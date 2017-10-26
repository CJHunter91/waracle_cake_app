import React, { Component } from 'react';
import CakeList from '../components/CakeList';
import AjaxRequest from '../services/AjaxRequest'

class CakeContainer extends Component {

	setCakeData(data){
		this.setState({ cakeData:data })
	}

	componentWillMount(){
		this.setState({ cakeData:[] })
	}

	componentDidMount(){
		const ajaxRequest = new AjaxRequest("http://ec2-52-209-201-89.eu-west-1.compute.amazonaws.com:5000/api/cakes")
		ajaxRequest.get(this.setCakeData.bind(this))
	}

  	render() {
    	return (
      	<CakeList cakeData={this.state.cakeData}/>
    	);
  	}
}

export default CakeContainer;
