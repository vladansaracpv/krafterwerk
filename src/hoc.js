import React from "react";

// hasProps({sample: 'Sample Prop'})(Component)
export const hasProps = injectedProps => WrappedComponent => {
  const HasProps = props => <WrappedComponent {...injectedProps} {...props} />;

  return HasProps;
};

export const branch = (test, ComponentOnPass, ComponentOnFail) => props =>
  test ? <ComponentOnPass {...props} /> : <ComponentOnFail {...props} />;
