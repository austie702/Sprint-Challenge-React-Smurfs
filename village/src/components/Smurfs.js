import React, { Component } from 'react';

import Smurf from './Smurf';

class Smurfs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ''
    }
  }

  killSmurf = event => {
    event.preventDefault();
    this.props.killSmurf(this.state.id);
    this.setState({
      id: ''
    })
  }

  handleInputChange = e => {
    this.setState({ id: e.target.value })
    this.killSmurf(this.state);
  }

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <div>
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id} />
                  <button 
                    onClick={this.handleInputChange} 
                    value={smurf.id}>
                    Kill Smurf
                  </button>
                </div>
                );
              })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
