import React, { useEffect, useRef } from "react";
import * as Nexus from "nexusui";
import { getId, NO_OP } from "../utils";

const Pan = React.memo(function Pan({
  size = [120, 30],
  value = 0,
  onChange = NO_OP,
  onReady = NO_OP
}) {
  let pan = useRef(null);
  let elementId = useRef(`nexus-ui-pan-${getId()}`);

  useEffect(() => {
    pan.current = new Nexus.Pan(elementId.current);
    pan.current.colorize("accent", "#1890ff");
    onReady(pan.current);

    pan.current.on("change", newState => {
      onChange(newState);
    });

    return () => {
      pan.current.destroy();
    };
  }, [onReady, onChange]);

  useEffect(() => {
    if (pan.current === null) return;
    if (!Array.isArray(size)) {
      return;
    }
    pan.current.resize(...size);
  }, [size]);

  useEffect(() => {
    if (pan.current === null) return;
    if (value === undefined) return;

    pan.current.value = value;
  }, [value]);

  return <div id={elementId.current}></div>;
});

export default Pan;
