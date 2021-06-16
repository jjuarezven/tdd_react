import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  render() {
    const location = this.props.location
      ? this.props.location
      : "All Locations";
    return <button className="location-button">{location}</button>;
  }
}

export default Button;
