import React from 'react';

const MySearch = props => {
  return (
    <div className="col l6 s6 m6" style={{ paddingTop: 10 }}>
      <div className="card" style={{ marginTop: 15, padding: 10 }}>
        <input
          id="inputField"
          placeholder="Enter a country / region... (e.g. China, Italy, Spain...)"
          type="text"
          onChange={props.updateInputValue}
          onKeyDown={props.handleKeyDown}
          style={{ color: '#777' }}
        />
        <button className="waves-effect waves-light btn red lighten-2" onClick={props.handleSubmit}>
          Retrieve Data!
        </button>
      </div>
    </div>
  );
};

export default MySearch;
