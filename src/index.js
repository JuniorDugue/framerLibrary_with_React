import React from "react";
import ReactDOM from "react-dom";
import { Frame } from "framer"; //from the framer libarary

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Frame
        width={120}
        height={60}
        borderRadius={60}
        onTap={function handleTap() {
          //change the value to x = {0}
          console.log("tapped!");
        }}
      >
        {/* have to camel case border-radius, for height/width you can use % or rem*/}
        <Frame size={60} borderRadius={30} x={60} />
        {/*x is like x translate in css */}
      </Frame>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
