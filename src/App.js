import React, { Component } from 'react';
import CakeContainer from './containers/CakeContainer';
import CakeForm from './containers/CakeForm';
import ShowCake from './components/ShowCake';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
    	<Router>

    	<section id="app">
    	<header>
    	<h3 id="title">Cake Book</h3>
    	</header>
    	<nav>
    		<Link to={'/'}>
    		<li>Home</li>
    		</Link>
    		<Link to={'/new'}>
    		<li>Add Cake</li>
    		</Link>
    	</nav>
    	<article id="main-view">
    	<Switch>
     		<Route exact={true} path='/' component={CakeContainer}/>
     		<Route exact={true} path='/new' component={CakeForm}/>
     		<Route exact={true} path='/:cakeID' component={ShowCake}/>
   		</Switch>
    	</article>
    	</section>
    	</Router>
    );
  }
}

export default App;
