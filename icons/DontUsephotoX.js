import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDontUsephotoX(props) {
  return (
    <Svg
      width="100"
      height="100"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M.63.63a2.142 2.142 0 013.033 0L15.001 11.97 26.338.63a2.146 2.146 0 013.034 3.034L18.03 15.001l11.342 11.337a2.146 2.146 0 01-3.034 3.034L15.001 18.03 3.663 29.372a2.145 2.145 0 11-3.034-3.034l11.342-11.337L.63 3.663a2.142 2.142 0 010-3.034z"
        fill="#F0EEEE"
      />
    </Svg>
  );
}

export default SvgDontUsephotoX;
