import React, { Component } from "react";
import Button from "./Button";
import Map from "./Map";
import Header from "../components/Header";
import mapChooser from "../mapChooser.js";
import axios from "axios";

class StoreLocator extends Component {
  constructor(props) {
    super(props);

    this.state = { currentMap: "none.png", shops: [] };

    this.chooseMap = this.chooseMap.bind(this);
  }

  async componentDidMount() {
    let response = axios
      .get("http://localhost:3000/data/shops.json")
      .then((reponse) => {
        this.setState({
          shops: response.data.shops
        });
      })
      .catch(() => {
        console.log("error");
      });
  }

  chooseMap(event) {
    this.setState({ currentMap: mapChooser(event.target.value) });
  }

  render() {
    const storeButtons = this.state.shops.map((shop, id) => {
      return (
        <Button
          key={id}
          location={shop.location}
          handleClick={this.chooseMap}
        />
      );
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
