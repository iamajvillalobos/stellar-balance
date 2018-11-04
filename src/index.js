import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import AddressChecker from "./AddressChecker";
import Footer from "./Footer";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Roboto", "Roboto Mono", "Roboto Condensed"]
  }
});

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <AddressChecker />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
