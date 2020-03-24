import React, { Component } from 'react';

export default class MyLeftCollection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
          <div className="card-image col m2 s2 l3">
            <img
              className="z-depth-5"
              src={this.props.flagURL}
              alt="flag"
              style={{ maxHeight: 150, width: 'auto', height: 'auto', marginTop: 10 }}
            />
          </div>
      </>
    );
  }
}
