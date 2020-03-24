import React, { Component } from 'react';

export default class MyLeftCollection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="col l3" style={{ marginTop: 10 }}>
          <div className="card">
            <div className="card-image z-depth-3">
              <img src={this.props.flagURL} alt="flag" />
            </div>
          </div>
        </div>
      </>
    );
  }
}
