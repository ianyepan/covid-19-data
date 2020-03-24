import React, { Component } from 'react';
import MyButton from './MyButton.js';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <nav>
          <div className="nav-wrapper">
            <p className="brand-logo" style={{ margin: 0 }}>
              COVID-19 Data
            </p>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <MyButton handleFn={this.props.handleOverview} str={'World Overview'} />
              </li>
              <li>
                <MyButton handleFn={this.props.handleTaiwan} str={'Taiwan Latest'} />
              </li>
              <li>
                <MyButton handleFn={this.props.handleHK} str={'HK Latest'} />
              </li>
              <li>
                <a
                  href="https://experience.arcgis.com/experience/685d0ace521648f8a5beeeee1b9125cd"
                  target="_blank"
                >
                  WHO Coverage Map
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}
