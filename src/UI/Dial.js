import React, { useEffect, useRef } from "react";
import * as Nexus from "nexusui";
import { getId, NO_OP } from "../utils";

const defaultProps = {
  value: 0,
  size: [75, 75],
  interaction: "radial",
  min: 0,
  max: 100,
  mode: "relative",
  colors: { knob: "#40a9ff", background: "#eee" },
  step: 1,
  onChange: NO_OP,
  onReady: NO_OP
};

function Dial(props) {
  const {
    value,
    size,
    interaction,
    min,
    max,
    mode,
    colors,
    step,
    onChange,
    onReady
  } = { ...defaultProps, ...props };
  let dial = useRef(null);
  let elementId = useRef(`krafterwerk-dial-${getId()}`);

  useEffect(() => {
    dial.current = new Nexus.Dial(elementId.current);

    dial.current.on("change", onChange);

    onReady(dial.current);

    return () => {
      dial.current.destroy();
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (dial.current === null || !Array.isArray(size)) return;

    dial.current.resize(...size);
  }, [size]);

  useEffect(() => {
    if (dial.current === null || value === undefined) return;

    dial.current.value = value;
  }, [value]);

  useEffect(() => {
    if (dial.current === null || mode === undefined) return;

    dial.current.mode = mode;
  }, [mode]);

  useEffect(() => {
    if (dial.current === null || step === undefined) return;

    dial.current.step = step;
  }, [step]);

  useEffect(() => {
    if (dial.current === null || min === undefined) return;

    dial.current.min = min;
  }, [min]);

  useEffect(() => {
    if (dial.current === null || max === undefined) return;

    dial.current.max = max;
  }, [max]);

  useEffect(() => {
    if (dial.current === null || colors === undefined) return;

    const { knob, background } = colors;
    if (knob) dial.current.colorize("accent", knob);
    if (background) dial.current.colorize("fill", background);
  }, [colors]);

  useEffect(() => {
    if (dial.current === null || interaction === undefined) return;

    dial.current.interaction = interaction;
  }, [interaction]);

  return <div key={elementId.current} id={elementId.current}></div>;
}

export default Dial;
