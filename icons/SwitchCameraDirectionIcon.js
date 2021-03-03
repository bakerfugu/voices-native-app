import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSwitchCameraDirectionIcon(props) {
  return (
    <Svg
      width="100"
      height="100"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7.5 10V7.5H3.862c1.726-2.987 4.95-5 8.638-5 4.65 0 8.563 3.2 9.675 7.5h2.575C23.587 4.3 18.55 0 12.5 0a12.481 12.481 0 00-10 5.013V2.5H0V10h7.5zm10 5v2.5h3.637c-1.724 2.988-4.95 5-8.637 5-4.65 0-8.563-3.2-9.675-7.5H.25c1.163 5.7 6.2 10 12.25 10 4.087 0 7.725-1.975 10-5.012V22.5H25V15h-7.5z"
        fill="#F1C232"
      />
      <Path
        d="M10 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"
        fill="#F1C232"
      />
    </Svg>
  );
}

export default SvgSwitchCameraDirectionIcon;
