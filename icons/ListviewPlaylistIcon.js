import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgListviewPlaylistIcon(props) {
  return (
    <Svg
      width="100"
      height="100"
      viewBox="0 0 43 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5.375 25.625v-2.563h32.25v2.563H5.375zm0-10.25h32.25v2.563H5.375v-2.563zm32.25-7.688v2.563H5.375V7.687h32.25zM5.375 30.75v2.563h32.25V30.75H5.375z"
        fill="#000"
      />
    </Svg>
  );
}

export default SvgListviewPlaylistIcon;
