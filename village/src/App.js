import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink, withRouter } from 'react-router-dom';
import axios from 'axios';
import Smurfs from './components/Smurfs';
import SmurfForm from './components/SmurfForm';
import './App.css';

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
        <nav>
          <div>
            <NavLink exact to='/'>
              Home
            </NavLink>
            <NavLink exact to='/smurfs'>
              Smurfs
            </NavLink>
            <NavLink exact to='/smurf-form'>
              Add Smurf Form
            </NavLink>
          </div>
        </nav>
        <Route
          exact path='/smurfs'
          render={props => (
            <Smurfs
              {...props} 
              killSmurf={this.killSmurf}
              smurfs={this.state.smurfs}
              key={this.state.smurfs.id}
            />
          )}
        />
        <Route
          exact path='/smurf-form'
          render={props => (
            <SmurfForm
            {...props}
            addSmurf={this.addSmurf}
            key={this.state.smurfs.id}
          />
          )}
        />
      </div>
    );
  }
}

export default App;
