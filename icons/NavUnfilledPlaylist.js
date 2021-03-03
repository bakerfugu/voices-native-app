import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgNavUnfilledPlaylist(props) {
  return (
    <Svg
      width="100"
      height="100"
      viewBox="0 0 40 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M33.44 10.483H0v5.242h33.44v-5.242zM33.44 0H0v5.242h33.44V0zM0 26.208h25.572v-5.241H0v5.241zm29.507-5.241v15.725l9.835-7.863-9.835-7.862z"
        fill="#C4C4C4"
      />
    </Svg>
  );
}

export default SvgNavUnfilledPlaylist;
