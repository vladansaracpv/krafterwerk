import React, { useEffect, useRef } from "react";
import * as Nexus from "nexusui";
import { getId, NO_OP } from "../utils";

const defaultProps = {
  size: [500, 125],
  mode: "button",
  lowNote: 24,
  highNote: 60,
  onChange: NO_OP,
  colors: {
    keyOn: "#2bb",
    keyOff: "#fff",
    blackKey: "#333"
  },
  onReady: NO_OP
};
function Piano(props) {
  let piano = useRef(null);
  let elementId = useRef(`krafterwerk-dial-${getId()}`);

  const { lowNote, highNote, size, mode, colors, onChange, onReady } = {
    ...defaultProps,
    ...props
  };

  function handleResize(size) {
    if (piano.current === null || !Array.isArray(size)) return;

    piano.current.resize(...size);
  }

  function handleColors(colors) {
    if (piano.current === null || colors === undefined) return;

    const { keyOn, keyOff, blackKey } = colors;
    if (keyOn) piano.current.colorize("accent", keyOn);
    if (keyOff) piano.current.colorize("light", keyOff);
    if (blackKey) piano.current.colorize("dark", blackKey);
  }

  function handleMode(mode) {
    if (piano.current === null || mode === undefined) return;
    piano.current.mode = mode;
  }

  useEffect(() => {
    function handleChange(state) {
      onChange(state);
    }

    piano.current = new Nexus.Piano(elementId.current, {
      lowNote,
      highNote,
      size,
      mode,
      colors
    });

    piano.current.colors = handleColors;
    piano.current.on("change", handleChange);
    piano.current.on("resize", handleResize);
    piano.current.on("colors", handleColors);
    piano.current.on("mode", handleMode);

    onReady(piano.current);

    return () => {
      piano.current.destroy();
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    piano.current.emit("resize");
    if (piano.current === null || !Array.isArray(size)) return;
    piano.current.resize(...size);
  }, [size]);

  useEffect(() => {
    piano.current.emit("mode", mode);
  }, [mode]);

  useEffect(() => {
    piano.current.emit("colors", colors);
  }, [colors]);

  return <div id={elementId.current} ref={piano} nexus-ui="piano"></div>;
}

export default Piano;
