import * as React from "react";
import Svg, { Circle } from "react-native-svg";

function SvgTimeElapsedCircle(props) {
  return (
    <Svg
      width="100"
      height="100"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={11.5} cy={11.5} r={11.5} fill="#000" />
    </Svg>
  );
}

export default SvgTimeElapsedCircle;
