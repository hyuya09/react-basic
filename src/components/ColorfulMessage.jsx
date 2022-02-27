import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentstyle = {
    color,
    fontSize: "18px"
  };
  return <p style={contentstyle}>{children}</p>;
};
