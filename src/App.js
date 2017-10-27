import React, { Component } from 'react';
import CakeContainer from './containers/CakeContainer'
import CakeForm from './containers/CakeForm'
import './App.css';

class App extends Component {
  render() {
    return (
    	<section id="main-view">
     		<CakeContainer/>
      		<CakeForm/>
    	</section>
    );
  }
}

export default App;
