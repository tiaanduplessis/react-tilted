import React from "react";
import ReactDOM from "react-dom";

import Tilt from 'react-tilted'

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Tilt onTiltChange={console.log} >
        <h1>Tilting 1</h1>
      </Tilt>

      <Tilt reverse >
        <h1>Tilting 2</h1>
      </Tilt>

      <Tilt scale={2}>
        <h1>Tilting 3</h1>
      </Tilt>

      <Tilt glare>
        <h1>Tilting 3</h1>
      </Tilt>

    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
