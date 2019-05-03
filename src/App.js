import React from "react";
import Story from "./Story";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Story />
      <footer>
        <hr style={{ width: "90%" }} />
        <p
          style={{ fontFamily: "Quicksand", fontSize: 18, marginLeft: "20px" }}
        >
          By Anthony Leung
        </p>
      </footer>
    </div>
  );
}

export default App;
