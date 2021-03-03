import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShareIcon(props) {
  return (
    <Svg
      width="100"
      height="100"
      viewBox="0 0 21 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1 11.5v8.4c0 .557.25 1.091.696 1.485.445.394 1.05.615 1.679.615h14.25c.63 0 1.234-.221 1.68-.615.445-.394.695-.928.695-1.485v-8.4M15.25 5.2L10.5 1 5.75 5.2M10.5 1v13.65"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgShareIcon;
