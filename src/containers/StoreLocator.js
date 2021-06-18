import React, { Component } from "react";
import Button from "./Button";
import Map from "./Map";
import Header from "../components/Header";

class StoreLocator extends Component {
  constructor(props) {
    super(props);

    this.state = { currentMap: "none.png" };

    this.shops = [
      { location: "Portland", address: "123 Portland" },
      { location: "Astoria", address: "123 Astoria" },
      { location: "", address: "" }
    ];
  }

  render() {
    let storeButtons = this.shops.map((shop, id) => {
      return <Button key={id} location={shop.location} />;
    });

    return (
      <>
        <Header />
        <div>{storeButtons}</div>
        <Map imagename={this.state.currentMap} location={this.props.location} />
      </>
    );
  }
}

export default StoreLocator;
