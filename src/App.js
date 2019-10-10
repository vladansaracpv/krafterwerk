import React, { useState } from "react";
import "./App.css";
import Dial from "./Dial";
import RadioGroup from "./RadioGroup";

function App() {
  const [oscType, setOscType] = useState("sine");

  const onChangeHandler = e => {
    const type = e.target.value;
    console.log(type);
    setOscType(type);
  };
  return (
    <div className="App">
      <Dial />
      <RadioGroup value={oscType} onChange={onChangeHandler} />
    </div>
  );
}

export default App;
