import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {getBeers} from './service'
import RandomBeer from './components/RandomBeer'
import Beers from './components/Beers'
import Router from './Router'
import AddBeers from './components/AddBeers'
class App extends Component {
 
  render() {
    return (
     <div>
          <div>
           <Beers/>
         </div>
         <div>
           <RandomBeer/>
         </div>
         <div>
           <AddBeers />
         </div>
      
      <div className="App">
          <Router/>
        
      </div>
    </div>
    );
  }
}

export default App;
