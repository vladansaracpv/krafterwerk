import React, { useEffect, useRef } from "react";
import * as Nexus from "nexusui";
import { getId, NO_OP } from "../utils";

const defaultProps = {
  value: 0,
  size: [120, 30],
  colors: { button: "#40a9ff", background: "#eee" },
  onChange: NO_OP,
  onReady: NO_OP
};
function Pan(props) {
  const { size, value, colors, onChange, onReady } = {
    ...defaultProps,
    ...props
  };
  let panRef = useRef(null);
  let elementId = useRef(`krafterwerk-pan-${getId()}`);

  useEffect(() => {
    panRef.current = new Nexus.Pan(elementId.current);

    panRef.current.on("change", onChange);

    onReady(panRef.current);

    return () => {
      panRef.current.destroy();
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (panRef.current === null || !Array.isArray(size)) return;
    panRef.current.resize(...size);
  }, [size]);

  useEffect(() => {
    if (panRef.current === null || value === undefined) return;
    panRef.current.value = value;
  }, [value]);

  useEffect(() => {
    if (panRef.current === null || colors === undefined) return;

    const { button, background } = colors;
    if (button) panRef.current.colorize("accent", button);
    if (background) panRef.current.colorize("fill", background);
  }, [colors]);

  return <div key={elementId.current} id={elementId.current}></div>;
}
export default Pan;
