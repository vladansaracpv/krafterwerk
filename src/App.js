import React, { useState, useRef, useCallback } from "react";
import "./App.css";
import Dial from "./UI/Dial";
import RadioGroup from "./UI/RadioGroup";
import Toggle from "./UI/Toggle";
import Pan from "./UI/Pan";
import Oscilloscope from "./UI/Oscilloscope";
import * as Nexus from "nexusui";

const functions = new Set();
function App() {
  const [dialValue, setDialValue] = useState(0);
  const [oscType, setOscType] = useState("sine");
  const [powerValue, setPowerValue] = useState(0);
  const [panValue, setPanValue] = useState(0);
  const panRef = useRef(null);
  const dialRef = useRef(null);
  const oscRef = useRef(null);

  const Tone = window.Tone;
  Nexus.context = Tone.context;

  const onDialReady = useCallback(dial => (dialRef.current = dial), []);

  const onDialChanged = useCallback(value => setDialValue(value), []);

  const onPanReady = useCallback(pan => (panRef.current = pan), []);

  const onPanChanged = useCallback(({ value }) => setPanValue(value), []);

  const onTypeChanged = useCallback(e => {
    const type = e.target.value;
    console.log(type);
    setOscType(type);
  }, []);

  const onPowerToggled = useCallback(state => {
    console.log("state", state);
    setPowerValue(state);
  }, []);

  const onOscReady = useCallback(oscilloscope => {
    oscRef.current = oscilloscope;
    var o = Tone.context.createOscillator();
    o.connect(Tone.Master);
    oscRef.current.connect(Tone.Master);
    o.start(0);
    o.stop(2);
  }, []);

  functions.add(onPanReady);
  functions.add(onPanChanged);
  functions.add(onDialReady);
  functions.add(onDialChanged);
  functions.add(onTypeChanged);
  functions.add(onPowerToggled);

  return (
    <div className="App">
      <Dial value={dialValue} onChange={onDialChanged} onReady={onDialReady} />
      <RadioGroup value={oscType} onChange={onTypeChanged} />
      <Toggle value={powerValue} onChange={onPowerToggled} />
      <Pan value={panValue} onChange={onPanChanged} onReady={onPanReady} />
      <Oscilloscope onReady={onOscReady} />
    </div>
  );
}

export default App;
