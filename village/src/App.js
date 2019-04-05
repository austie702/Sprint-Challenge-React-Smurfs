import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  
  componentDidMount() {
    axios
    .get('http://localhost:3333/smurfs')
        .then(res => {
          this.setState({ smurfs: res.data })
        })
        .catch(err => {
          console.log(err)
        })
  }
  
  addSmurf = (smurf) => {
    console.log('app > addSmurf() called');
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(res => {
        this.setState({ smurfs: res.data })
      })
      .catch(err => console.log(err))
  }

  killSmurf = (id) => {
    console.log('app > killSmurf() called')
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        this.setState({ smurfs: res.data })
      })
      .catch(err => console.log('Failed Attempted Murder'));
  }
  
  render() {
    return (
      <div className="App">
        <SmurfForm addSmurf={this.addSmurf} key={this.state.smurfs.id} />
        <Smurfs 
          smurfs={this.state.smurfs} 
          killSmurf={this.killSmurf} 
          key={this.state.smurfs.id} />
      </div>
    );
  }
}

export default App;
