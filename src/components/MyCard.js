import React, { Component } from 'react';

export default class MyCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="col l2" style={{ width: 620 }}>
          <div className="card horizontal">
            <div className="card-image">
              <img src={this.props.imageLink} style={{ objectFit: 'cover' }} />
            </div>
            <div className="card-stacked">
              <div className="card-action red lighten-2">
                <h5 className="white-text">{this.props.str}</h5>
              </div>
              <div className="card-content">
                <h6>{this.props.value}</h6>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
