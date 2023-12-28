

import React, { Component } from 'react';

class IsItRaining extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itsRaining: false
    };
  }

  render() {
    const { itsRaining } = this.state;
    return (
      <div>
        <h1>Is it Raining today? {itsRaining ? 'Yes' : 'No'}</h1>
        <button onClick={() => this.setState({ itsRaining: !itsRaining })}>
          Toggle Rain
        </button>
      </div>
    );
  }
}

export default IsItRaining;
