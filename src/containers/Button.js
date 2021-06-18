import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  render() {
    const location = this.props.location
      ? this.props.location
      : "All Locations";
    return (
      <button
        value={this.props.location}
        className="location-button"
        onClick={this.props.handleClick}
      >
        {location}
      </button>
    );
  }
}

export default Button;
