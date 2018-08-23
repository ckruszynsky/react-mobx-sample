import React, { Component } from "react";

export default class Controls extends Component {
  clearList = () => {
    this.props.onClear();
  };

  render() {
    return (
      <div className="controls">
        <button onClick={this.props.onAdd}>Add Employee</button>
        <button onClick={this.clearList}>Clear Records</button>
      </div>
    );
  }
}
