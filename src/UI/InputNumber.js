import React from "react";
import { InputNumber } from "antd";
import { NO_OP } from "../utils";

/**
 *
 * @param value  - initial state
 * @param icons  - icons for off,on states
 * @param colors - colors for off,on states
 * @param size   - large, small, ''
 * @param shape  - circle, round, ''
 */
export const InputNum = ({
  value = 0,
  size = "large",
  min = 0,
  max = 100,
  step = 1,
  onChange = NO_OP
}) => {
  return (
    <InputNumber
      min={min}
      max={max}
      step={step}
      value={value}
      size={size}
      onChange={onChange}
    />
  );
};

export default InputNum;
