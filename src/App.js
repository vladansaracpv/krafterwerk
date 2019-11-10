import React, { useState, useRef, useCallback } from "react";
import "./App.css";
// import Pan from "./ui/Pan";
// import Dial from "./ui/Dial";
// import RadioGroup from "./ui/RadioGroup";
// import Piano from "./ui/Piano";
// import Oscilloscope from "./ui/Oscilloscope";
// import InputNum from "./ui/InputNumber";

// import * as Nexus from "nexusui";
// import { BtnOn, BtnPlay } from "./ui/Toggle";

import NoteContainer from "./music/Note";

// const Tone = window.Tone;
// Nexus.context = Tone.context;

function App() {
  // BtnOnOff
  // const [power, setPower] = useState(0);
  // const onPowerToggled = useCallback(state => setPower(state), []);
  // const PowerButton = BtnOn;

  // // // BtnPlayStop
  // const [play, setPlay] = useState(0);
  // const onPlayToggled = useCallback(state => setPlay(state), []);
  // const PlayButton = BtnPlay;

  // // Pan component
  // const panRef = useRef(null);
  // const [panValue, setPanValue] = useState(0);
  // const onPanReady = useCallback(pan => (panRef.current = pan), []);
  // const onPanChanged = useCallback(newValue => setPanValue(newValue.value), []);

  // // Dial component
  // const dialRef = useRef(null);
  // const [dialValue, setDialValue] = useState(0);
  // const onDialReady = useCallback(dial => (dialRef.current = dial), []);
  // const onDialChanged = useCallback(value => setDialValue(value), []);

  // // Type component
  // const [type, setType] = useState("sine");
  // const onTypeChanged = useCallback(value => setType(value), []);

  // // Piano;
  // const pianoRef = useRef(null);
  // const onPianoReady = useCallback(piano => (pianoRef.current = piano), []);
  // const onPianoChanged = useCallback(value => console.log(value), []);

  // // Oscillator
  // const oscRef = useRef(null);
  // const onOscReady = useCallback(oscilloscope => {
  //   oscRef.current = oscilloscope;
  //   // var o = Tone.context.createOscillator();
  //   // o.connect(Tone.Master);
  //   // oscRef.current.connect(Tone.Master);
  //   // o.start(0);
  //   // o.stop(2);
  // }, []);

  // // Dial component
  // const [inputValue, setInputValue] = useState(0);
  // const onInputNumChanged = useCallback(value => setInputValue(value), []);

  return (
    <div className="App">
      <NoteContainer midi={69} />
      {/* <PlayButton value={power} onChange={onPowerToggled} />
      <PowerButton value={play} onChange={onPlayToggled} />
      <Pan onReady={onPanReady} value={panValue} onChange={onPanChanged} />
      <Dial value={dialValue} onReady={onDialReady} onChange={onDialChanged} />
      <RadioGroup value={type} onChange={onTypeChanged} />
      <Piano onReady={onPianoReady} onChange={onPianoChanged} />
      <Oscilloscope onReady={onOscReady} />
      <InputNum onChange={onInputNumChanged} value={inputValue} /> */}
    </div>
  );
}

export default App;
