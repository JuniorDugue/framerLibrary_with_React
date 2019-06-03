import React from "react";
import ReactDOM from "react-dom";
import { Frame, useCycle } from "framer"; //from the framer libarary

import "./styles.css";

function App() {
  const result = useCycle(0, 60);
  const x = result[0];
  const cycle = result[1];
  // console.log(result);
  return (
    <div className="App">
      <Frame
        width={120}
        height={60}
        borderRadius={60}
        onTap={function handleTap() {
          //change the value to x = {0}
          // console.log("tapped!");
          cycle();
        }}
      >
        {/* have to camel case border-radius, for height/width you can use % or rem*/}
        <Frame size={60} borderRadius={30} animate={{ x: x }} />
        {/*x is like x translate in css */}
      </Frame>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
