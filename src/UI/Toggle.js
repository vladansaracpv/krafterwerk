import React from "react";
import { Button } from "antd";

const Toggle = React.memo(function Toggle({ value, onChange }) {
  const States = ["", "primary"];
  return (
    <Button
      size="large"
      type={States[value]}
      shape="circle"
      icon="poweroff"
      onClick={() => onChange((value + 1) % 2)}
    />
  );
});

export default Toggle;
