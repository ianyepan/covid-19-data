import React, { Component } from 'react';

export default class MyIntro extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="col l3 hide-on-med-and-down">
          <div
            className="card-content z-depth-2 red lighten-2 white-text"
            style={{ marginTop: 10, padding: 15 }}
          >
            <span>
              Coronavirus disease 2019 is an infectious disease caused by severe acute respiratory
              syndrome coronavirus 2, resulting in the 2019–20 coronavirus pandemic.
            </span>
          </div>
        </div>
      </>
    );
  }
}
