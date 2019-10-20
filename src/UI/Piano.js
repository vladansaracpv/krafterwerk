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

  useEffect(() => {
    piano.current = new Nexus.Piano(elementId.current, {
      lowNote,
      highNote,
      size,
      mode,
      colors
    });

    piano.current.on("change", onChange);

    onReady(piano.current);

    return () => {
      piano.current.destroy();
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (piano.current === null || !Array.isArray(size)) return;

    piano.current.resize(...size);
  }, [size]);

  useEffect(() => {
    if (piano.current === null || mode === undefined) return;
    piano.current.mode = mode;
  }, [mode]);

  useEffect(() => {
    if (piano.current === null || colors === undefined) return;

    const { keyOn, keyOff, blackKey } = colors;
    if (keyOn) piano.current.colorize("accent", keyOn);
    if (keyOff) piano.current.colorize("light", keyOff);
    if (blackKey) piano.current.colorize("dark", blackKey);
  }, [colors]);

  return <div id={elementId.current} ref={piano} nexus-ui="piano"></div>;
}

export default Piano;
