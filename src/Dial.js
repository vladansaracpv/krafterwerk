import React, { useEffect, useRef } from "react";
import * as Nexus from "nexusui";

let id = 0;
export function getId() {
  id += 1;
  return id;
}

// 'interaction': 'radial', // "radial", "vertical", or "horizontal"
// 'mode': 'relative', // "absolute" or "relative"
function Dial({
  size,
  interaction,
  max,
  min,
  mode,
  value,
  onChange = () => {},
  onReady = () => {}
}) {
  let dial = useRef(null);
  let elementId = useRef(`nexus-ui-dial-${getId()}`);

  useEffect(() => {
    // componentDidMount
    dial.current = new Nexus.Dial(elementId.current, {
      size,
      interaction,
      max,
      min,
      mode
    });
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
  }, [interaction, min, max, size, mode, onChange, onReady]);

  return <div key={elementId.current} id={elementId.current}></div>;
}

export default Dial;
