import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAddToPlaylistIcon(props) {
  return (
    <Svg
      width="100"
      height="100"
      viewBox="0 0 30 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M24.637 14.78V9.9h-1.995v4.88h-5.07v2.032h5.07V22h1.995v-5.188H30V14.78H24.637zM0 0h18.319v1.801H0V0zm0 7.39h18.32v1.848H0V7.39zm0 7.39h13.313v2.032H0V14.78z"
        fill="#000"
      />
    </Svg>
  );
}

export default SvgAddToPlaylistIcon;
