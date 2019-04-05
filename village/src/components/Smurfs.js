import React, { Component } from 'react';

import Smurf from './Smurf';

const Smurfs = props => {
  return (
    <div className="Smurfs">
      <h1>Smurf Village</h1>
      <ul>
        {props.smurfs.map(smurf => {
          return (
            <div>
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id} />
                <button 
                  onClick={() => props.killSmurf(smurf.id)} 
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

export default Smurfs;
