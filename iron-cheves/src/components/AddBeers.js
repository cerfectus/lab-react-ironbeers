import React from 'react';
import axios from 'axios';

export default class AddBeers extends React.Component {
  state = {
    cheve: '',
  }

  handleChange = event => {
    this.setState({ cheve: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      cheve: this.state.cheve
    };
    const base_url = 'https://ironbeer-api.herokuapp.com/beers'
    axios.post(`${base_url}/add`)
      .then(res => {
        console.log(res);
        console.log(res.body.data);
      })
  }

  render() {
    return (
      <div className='box'>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person :
            <input type="text" cheve="cheve" onChange={this.handleChange} />
          </label>
          <label>
            Tagline :
            <input type="text" cheve="cheve" onChange={this.handleChange} />
          </label>
          <label>
            Description :
            <input type="text" cheve="cheve" onChange={this.handleChange} />
          </label>
          <label>
            First Brewed :
            <input type="text" cheve="cheve" onChange={this.handleChange} />
          </label>
          <label>
            Brewers tips :
            <input type="text" cheve="cheve" onChange={this.handleChange} />
          </label>
          <label>
            Attenuation level :
            <input type="text" cheve="cheve" onChange={this.handleChange} />
          </label>
          <label>
            Contributed By :
            <input type="text" cheve="cheve" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}
