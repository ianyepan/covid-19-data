import React, { Component } from 'react';

export default class MyRightCollection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
          <div className="col l6">
            <ui className="collection">
              <h6 className="collection-item active red lighten-2 z-depth-3">
                {'Overview daily stats of: ' + this.props.tab}
              </h6>
              <li className="collection-item z-depth-3">Diagnosed Today: {this.props.todayCases}</li>
              <li className="collection-item z-depth-3">Deaths Today: {this.props.todayDeaths}</li>
            </ui>
          </div>
      </>
    );
  }
}
