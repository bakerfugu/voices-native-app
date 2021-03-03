import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgThreedotsIcon(props) {
  return (
    <Svg
      width="100"
      height="100"
      viewBox="0 0 33 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M4.125 0C1.856 0 0 2.025 0 4.5S1.856 9 4.125 9 8.25 6.975 8.25 4.5 6.394 0 4.125 0zm24.75 0c-2.269 0-4.125 2.025-4.125 4.5S26.606 9 28.875 9 33 6.975 33 4.5 31.144 0 28.875 0zM16.5 0c-2.269 0-4.125 2.025-4.125 4.5S14.231 9 16.5 9s4.125-2.025 4.125-4.5S18.769 0 16.5 0z"
        fill="#878787"
      />
    </Svg>
  );
}

export default SvgThreedotsIcon;
