import React, { Component } from "react";

export class Spinner extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-primary " role="status">
          <span className="visually-hidden"></span>
        </div>
      </div>
    );
  }
}

export default Spinner;
