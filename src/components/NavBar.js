import React from 'react';
import MyButton from './MyButton.js';

const NavBar = props => {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <p className="brand-logo" style={{ margin: 0 }}>
            COVID-19 Data
          </p>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <MyButton handleFn={props.handleOverview} str={'World Overview'} />
            </li>
            <li>
              <MyButton handleFn={props.handleTaiwan} str={'Taiwan Latest'} />
            </li>
            <li>
              <MyButton handleFn={props.handleHK} str={'HK Latest'} />
            </li>
            <li>
              <a
                href="https://covid19.who.int/"
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
};

export default NavBar;
