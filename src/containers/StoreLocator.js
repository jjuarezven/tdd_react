import React, { Component } from "react";
import Button from "./Button";
import Map from "./Map";
import Header from "../components/Header";

class StoreLocator extends Component {
  render() {
    return (
      <>
        <Header />
        <div>
          <Button location="Portland" />
          <Button location="Astoria" />
          <Button />
        </div>
        <Map />
      </>
    );
  }
}

export default StoreLocator;
