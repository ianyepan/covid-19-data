import React from 'react';

const MyFlag = props => {
  return (
    <>
      <div className="card-image col m2 s2 l3">
        <img
          className="z-depth-5"
          src={props.flagURL}
          alt="flag"
          style={{ maxHeight: 150, width: 'auto', height: 'auto', marginTop: 10 }}
        />
      </div>
    </>
  );
};

export default MyFlag;
