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
      <div className="section">
        <div className="container">
          <AddressChecker />
          <Footer />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
