import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

function SvgSearchIcon(props) {
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
        d="M.4 25.937l5.714-5.841a1.36 1.36 0 01.975-.41h.934a12.298 12.298 0 01-2.522-7.5C5.501 5.455 10.838 0 17.424 0c6.587 0 11.924 5.455 11.924 12.186 0 6.732-5.337 12.187-11.924 12.187-2.768 0-5.313-.961-7.337-2.578v.955c0 .375-.143.732-.401.996L3.97 29.587a1.35 1.35 0 01-1.943 0L.405 27.929a1.435 1.435 0 01-.006-1.992zm17.024-6.251c4.053 0 7.338-3.352 7.338-7.5 0-4.142-3.279-7.499-7.338-7.499-4.052 0-7.337 3.351-7.337 7.5 0 4.141 3.279 7.499 7.337 7.499z"
        fill="#BDBDBD"
      />
      <Circle cx={17.283} cy={12.065} r={7.5} fill="#fff" />
    </Svg>
  );
}

export default SvgSearchIcon;
