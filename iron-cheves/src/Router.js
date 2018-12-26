import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import AddBeers from './components/AddBeers'

const Router = () => (
<Switch>
    <Route path='http://localhost:3000/all'component={Beers}/>
    <Route path='http://localhost:3000/new' component={RandomBeer}/>
    <Route path='http://localhost:3000/add/' component={AddBeers} />
</Switch>

)
export default Router