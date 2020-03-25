import React from 'react';

const MyRightCollection = props => {
  return (
    <>
      <div className="col l6 m6 s12">
        <ui className="collection">
          <h6 className="collection-item active red lighten-2 z-depth-3">
            {'Overview daily stats of: ' + props.countryName}
          </h6>
          <li className="collection-item z-depth-3">Diagnosed Today: {props.todayCases}</li>
          <li className="collection-item z-depth-3">Deaths Today: {props.todayDeaths}</li>
        </ui>
      </div>
    </>
  );
};

export default MyRightCollection;
