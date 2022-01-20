import React from "react";
import "./App.css";
import Product from "./components/Product";
import Stock from "./components/Stock";
// import Feed from "./components/Feed";

function App() {
  return (
    <div className="App">
      <h1 className="App-h1">Class Component vs Component with Hooks</h1>
      <header className="App-header">
        <Product />
        <Stock />
      </header>
      {/*<Feed/>*/}
    </div>
  );
}

export default App;
