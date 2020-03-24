import React, { Component } from 'react';

export default class MyLeftCollection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="col l6 m6 s12">
          <ui className="collection">
            <h6 className="collection-item active red lighten-2 z-depth-3">
              {'Latest (accumulative) stats of: ' + this.props.tab}
            </h6>
            <li className="collection-item z-depth-3">Total Recovered: {this.props.recovered}</li>
            <li className="collection-item z-depth-3">
              Cases per million: {this.props.casesPerOneMillion}
            </li>
            <li className="collection-item z-depth-3">
              Case Fatality Rate (CFR): {((this.props.deaths * 100) / this.props.cases).toFixed(4)}%
            </li>
          </ui>
        </div>
      </>
    );
  }
}
