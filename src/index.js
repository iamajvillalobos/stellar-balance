import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AddressChecker from "./AddressChecker";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <AddressChecker />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
