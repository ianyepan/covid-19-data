import React, { Component } from 'react';


export default class MyButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <button
          className="btn-large waves-effect waves-light red lighten-3"
          style={styles}
          onClick={this.props.handleFn}
        >
        {this.props.str}
        </button>
      </>
    )
  }
}

const styles = {
  margin: '10px',
};
