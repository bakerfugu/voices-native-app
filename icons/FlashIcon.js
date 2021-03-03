import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgFlashIcon(props) {
  return (
    <Svg
      width="100"
      height="100"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={20} cy={20} r={20} fill="#F1C232" />
      <Path
        d="M19 36l9.72-19.46H22V4L12 23.46h7V36zm1-36c5.5 0 10.2 2 14.1 5.9C38 9.8 40 14.5 40 20s-2 10.2-5.9 14.1C30.2 38 25.5 40 20 40S9.8 38 5.9 34.1C2 30.2 0 25.5 0 20S2 9.8 5.9 5.9C9.8 2 14.5 0 20 0z"
        fill="#000"
      />
    </Svg>
  );
}

export default SvgFlashIcon;
