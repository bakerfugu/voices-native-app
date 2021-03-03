import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPlayButtonIcon(props) {
  return (
    <Svg
      width="100"
      height="100"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M20.833 0C9.333 0 0 9.333 0 20.833c0 11.5 9.333 20.834 20.833 20.834 11.5 0 20.834-9.334 20.834-20.834S32.333 0 20.833 0zm-4.166 30.208v-18.75l12.5 9.375-12.5 9.375z"
        fill="#1DDBB5"
      />
    </Svg>
  );
}

export default SvgPlayButtonIcon;
