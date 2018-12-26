import React, { Component } from 'react';
import axios from 'axios';
import {getBeers} from '../service'
class Beers extends Component {

state={
    beers:[]
}

componentWillMount(){
   const base_url = "https://ironbeer-api.herokuapp.com/beers"
   axios.get(`${base_url}/all`)
    .then(cheves=>{
        this.setState({beers:cheves.data})
        
    })
   
}

render(){
        let {beers}=this.state;
        console.log(beers)
    return(
        <div>
        {
            beers.map((data,i)=>
                <div key={i}>
                    <img src={data.image_url} />
                    <h1>{data.name}</h1>
                    <h2>{data.description}</h2>

                </div>
            )
        }
        </div>
        
    )
}
}

export default Beers;