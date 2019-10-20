import React from "react";
import { Button } from "antd";
import { NO_OP, either } from "../utils";

/**
 *
 * @param value  - initial state
 * @param icons  - icons for off,on states
 * @param colors - colors for off,on states
 * @param size   - large, small, ''
 * @param shape  - circle, round, ''
 */
export const ToggleBtn = ({
  value = 0,
  iconOn = "",
  iconOff = "",
  size = "large",
  shape = "circle",
  onChange = NO_OP
}) => {
  return (
    <Button
      size={size}
      shape={shape}
      type={either("primary", "", value)}
      icon={either(iconOn, iconOff, value)}
      onClick={() => onChange((value + 1) % 2)}
    />
  );
};

export const withToggle = tprops => Component => props => (
  <Component {...tprops} {...props} />
);

export const BtnPlay = withToggle({
  iconOff: "pause",
  iconOn: "caret-right"
})(ToggleBtn);

export const BtnOn = withToggle({
  iconOff: "poweroff",
  iconOn: "poweroff"
})(ToggleBtn);
