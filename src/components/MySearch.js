import React, { Component } from 'react';

export default class MyCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <div className="card s6 m6" style={{margin: 30, marginTop: 15, marginBottom: 15, padding: 10}}>
            <input
              placeholder="Enter a country / region... (e.g. China, Italy, Spain...)"
              type="text"
              onChange={this.props.updateInputValue}
              style={{color: '#777'}}
            />
          <button
            className="waves-effect waves-light btn red lighten-2"
            onClick={this.props.handleSubmit}
          >
            Retrieve Data!
          </button>
        </div>
        </div>
    );
  }
}
