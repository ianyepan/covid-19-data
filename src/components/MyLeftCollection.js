import React from 'react';

const MyLeftCollection = props => {
  return (
    <>
      <div className="col l6 m6 s12">
        <ui className="collection">
          <h6 className="collection-item active red lighten-2 z-depth-3">
            {'Latest (accumulative) stats of: ' + props.countryName}
          </h6>
          <li className="collection-item z-depth-3">Total Recovered: {props.recovered}</li>
          <li className="collection-item z-depth-3">
            Cases per million: {props.casesPerOneMillion}
          </li>
          <li className="collection-item z-depth-3">
            Case Fatality Rate (CFR): {((props.deaths * 100) / props.cases).toFixed(4)}%
          </li>
        </ui>
      </div>
    </>
  );
};

export default MyLeftCollection;
