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

  function handleResize(size) {
    if (osc.current === null || !Array.isArray(size)) return;

    osc.current.resize(...size);
  }

  function handleColors(colors) {
    if (osc.current === null || colors === undefined) return;

    const { line, background } = colors;
    if (line) osc.current.colorize("accent", line);
    if (background) osc.current.colorize("fill", background);
  }

  useEffect(() => {
    function handleChange(state) {
      onChange(state);
    }

    osc.current = new Nexus.Oscilloscope(elementId.current);

    osc.current.colors = handleColors;
    osc.current.on("change", handleChange);
    osc.current.on("colors", handleColors);
    osc.current.on("resize", handleResize);

    onReady(osc.current);

    return () => osc.current.destroy();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    osc.current.emit("colors", colors);
  }, [colors]);

  useEffect(() => {
    osc.current.emit("resize", size);
  }, [size]);

  return <div key={elementId.current} id={elementId.current}></div>;
});

export default Oscilloscope;
