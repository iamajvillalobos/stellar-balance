import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello from React!</h1>
        <button>Hello too!</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
