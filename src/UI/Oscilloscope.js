import React, { useEffect, useRef } from "react";
import * as Nexus from "nexusui";
import { getId, NO_OP } from "../utils";

Nexus.onload = function() {
  console.log("Nexus loaded");
};
const Oscilloscope = React.memo(function Oscilloscope({
  size = [300, 150],
  onChange = NO_OP,
  onReady = NO_OP
}) {
  let osc = useRef(null);
  let elementId = useRef(`nexus-ui-oscilloscope-${getId()}`);

  useEffect(() => {
    osc.current = new Nexus.Oscilloscope(elementId.current);
    osc.current.colorize("accent", "#1890ff");
    onReady(osc.current);

    osc.current.on("change", newState => {
      onChange(newState);
    });

    return () => {
      osc.current.destroy();
    };
  }, []);

  useEffect(() => {
    if (osc.current === null) return;
    if (!Array.isArray(size)) {
      return;
    }
    osc.current.resize(...size);
  }, [size]);

  return <div id={elementId.current} ref={osc} nexus-ui="oscilloscope"></div>;
});

export default Oscilloscope;
