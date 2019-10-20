import React, { useEffect, useRef } from "react";
import * as Nexus from "nexusui";
import { getId, NO_OP } from "../utils";

function NexusContainer({ elType, ...props }) {
  let elRef = useRef(null);
  let elementId = useRef(`krafterwerk-${elType}-${getId()}`);

  useEffect(() => {
    elRef.current = new Nexus.Pan(elementId.current, { ...props });

    return () => {
      elRef.current.destroy();
    };
  }, []);

  return <div id={elementId.current}></div>;
}

const withMode = Component => mode => {
  return <Component mode={mode} />;
};
