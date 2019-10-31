import React, { Component } from "react";
import StockCheck from "./StockCheck";
import items from "../data/data";

class LocalData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: items
    };
    this.getInitialState = this.getInitialState.bind(this);
    this.toggleStock = this.toggleStock.bind(this);
  }

  getInitialState = () => {
    return { showStockCheck: "hidden" };
  };

  toggleStock = () => {
    let css = this.state.showStockCheck === "hidden" ? "show" : "hidden";
    this.setState({ showStockCheck: css });
  };

  render() {
    const { items } = this.state;
    return (
      <div className="container">
        <button onClick={this.toggleStock}>Toggle Stock</button>
        <div className={this.state.showStockCheck}>
          {<StockCheck collection={items.row} />}
        </div>
      </div>
    );
  }
}

export default LocalData;
