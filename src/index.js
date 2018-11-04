import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AddressChecker from "./AddressChecker";

class App extends React.Component {
  render() {
    return <AddressChecker />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
