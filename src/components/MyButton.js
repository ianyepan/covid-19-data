import React from 'react';

const MyButton = props => {
  return (
    <>
      <button
        className="btn white-text waves-effect waves-light red lighten-3"
        style={styles}
        onClick={props.handleFn}
      >
        {props.str}
      </button>
    </>
  );
};

const styles = {
  margin: '10px',
};

export default MyButton;
