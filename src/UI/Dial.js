import React, { useEffect, useRef } from "react";
import * as Nexus from "nexusui";
import { getId, NO_OP } from "../utils";

const Dial = React.memo(function Dial({
  value = 0,
  size = [75, 75],
  interaction = "radial",
  max = 1,
  min = 0,
  mode = "relative",
  step = 0,
  onChange = NO_OP,
  onReady = NO_OP
}) {
  let dial = useRef(null);
  let elementId = useRef(`nexus-ui-dial-${getId()}`);

  console.log("Dial rendered");

  useEffect(() => {
    // componentDidMount
    dial.current = new Nexus.Dial(elementId.current);
    dial.current.colorize("accent", "#1890ff");

    // Fire onReady callback
    onReady(dial.current);

    // onChange => call onChange callback
    dial.current.on("change", newState => {
      onChange(newState);
    });

    // componentWillUnmount
    return () => {
      dial.current.destroy();
    };
  }, [onReady, onChange]);

  useEffect(() => {
    if (dial.current === null) return;
    if (!Array.isArray(size)) {
      return;
    }
    dial.current.resize(...size);
  }, [size]);

  useEffect(() => {
    if (dial.current === null) return;
    if (value === undefined) return;

    dial.current.value = value;
  }, [value]);

  useEffect(() => {
    if (dial.current === null) return;
    if (mode === undefined) return;
    dial.current.mode = mode;
  }, [mode]);

  useEffect(() => {
    if (dial.current === null) return;
    if (step === undefined) return;
    dial.current.step = step;
  }, [step]);

  useEffect(() => {
    if (dial.current === null) return;
    if (min === undefined) return;
    dial.current.min = min;
  }, [min]);

  useEffect(() => {
    if (dial.current === null) return;
    if (max === undefined) return;
    dial.current.max = max;
  }, [max]);

  useEffect(() => {
    if (dial.current === null) return;
    if (interaction === undefined) return;
    dial.current.interaction = interaction;
  }, [interaction]);

  return <div key={elementId.current} id={elementId.current}></div>;
});

export default Dial;
