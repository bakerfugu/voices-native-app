import * as React from "react";
import Svg, { Circle } from "react-native-svg";

function YellowBlurOrb(props) {
  return (
    <Svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={50} cy={50} r={50} fill="#F1C232" fillOpacity={0.2} />
      <Circle cx={50} cy={50} r={47.5} fill="#F1C232" fillOpacity={0.2} />
      <Circle cx={50} cy={50} r={45} fill="#F1C232" fillOpacity={0.6} />
    </Svg>
  );
}

export default YellowBlurOrb;
