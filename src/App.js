import React, { Component } from 'react';
import CakeContainer from './containers/CakeContainer';
import CakeForm from './containers/CakeForm';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
    	<Router>

    	<section id="app">
    	<nav>
    		<Link to={'/'}>
    		<li>Home</li>
    		</Link>
    		<Link to={'/new'}>
    		<li>Add Cake</li>
    		</Link>
    	</nav>
    	<article id="main-view">
     		<Route exact={true} path='/' component={CakeContainer}/>
     		<Route path='/new' component={CakeForm}/>
    	</article>
    	</section>
    	</Router>
    );
  }
}

export default App;
