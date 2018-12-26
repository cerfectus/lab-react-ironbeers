import React from "react";
import Axios from "axios";

class RandomBeer extends React.Component {
  state = {
    Random: []
  };
  componentWillMount() {
    const base_url = "https://ironbeer-api.herokuapp.com/beers";
    Axios.get(`${base_url}/random`)
      .then(cheve => {
        this.setState({ Random: cheve.data });
        console.log(cheve);
      })
      .catch(err => console.log(err));
  }
  render() {
    let { Random } = this.state;
    console.log(Random);
    return (
      <div>
        {Random.map((data, i) => (
          <div key={i}>
            <img width="40%" src={data.image_url} />
            <h1>{data.name}</h1>
            <h2>{data.tagline}</h2>
            <h3>{data.description}</h3>
            <h3>{data.first_brewed}</h3>
          </div>
        ))}
      </div>
    );
  }
}
export default RandomBeer;
