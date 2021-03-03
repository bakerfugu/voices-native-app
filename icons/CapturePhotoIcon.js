import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCapturePhotoIcon(props) {
  return (
    <Svg
      width="100"
      height="100"
      viewBox="0 0 80 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M77.5 41c0 21.322-16.847 38.5-37.5 38.5S2.5 62.322 2.5 41 19.347 2.5 40 2.5 77.5 19.678 77.5 41z"
        fill="#C4C4C4"
        fillOpacity={0.49}
        stroke="#F1C232"
        strokeWidth={5}
      />
    </Svg>
  );
}

export default SvgCapturePhotoIcon;
