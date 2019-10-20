import React, { useEffect, useRef } from "react";
import * as Nexus from "nexusui";
import { getId, NO_OP } from "../utils";

const defaultProps = {
  size: [300, 150],
  colors: { line: "#40a9ff", background: "#eee" },
  onChange: NO_OP,
  onReady: NO_OP
};
const Oscilloscope = React.memo(function Oscilloscope(props) {
  let osc = useRef(null);
  let elementId = useRef(`krafterwerk-oscilloscope-${getId()}`);

  const { size, colors, onReady, onChange } = { ...defaultProps, ...props };

  useEffect(() => {
    osc.current = new Nexus.Oscilloscope(elementId.current);

    osc.current.on("change", onChange);

    onReady(osc.current);

    return () => osc.current.destroy();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (osc.current === null || colors === undefined) return;
    const { line, background } = colors;
    if (line) osc.current.colorize("accent", line);
    if (background) osc.current.colorize("fill", background);
  }, [colors]);

  useEffect(() => {
    if (osc.current === null || !Array.isArray(size)) return;
    osc.current.resize(...size);
  }, [size]);

  return <div key={elementId.current} id={elementId.current}></div>;
});

export default Oscilloscope;
