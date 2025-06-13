import React from "react";
import "./App.css"
import Timer from "./component/Timer"
import HiddenWord from "./component/HiddenWord"

function App() {
  return (
    <div className="app">
      <HiddenWord />
      <Timer />
    </div>
  )
}

export default App;
