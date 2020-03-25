import React from 'react';

const MyCard = props => {
  return (
    <>
      <div className="col l6 m6 s12">
        <div className="card horizontal">
          <div className="card-image hide-on-med-and-down">
            <img src={props.imageLink} alt="virus" style={{ objectFit: 'cover' }} />
          </div>
          <div className="card-stacked">
            <div className="card-action red lighten-2">
              <h6 className="white-text">{props.str}</h6>
            </div>
            <div className="card-content">
              <h5>{props.value}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCard;
