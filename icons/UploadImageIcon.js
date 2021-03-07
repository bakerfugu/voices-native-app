import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgUploadImageIcon(props) {
  return (
    <Svg
      width="100"
      height="100"
      viewBox="0 0 77 66"
      fill="#FFF"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M38.625 42.063L54.75 28.374l21.5 18.25v18.25H1V51.187m48.375 0l-21.5-18.25L1 55.75V1h75.25v50.188H49.375z"
        stroke="#F1B600"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22.5 23.813c4.453 0 8.063-3.065 8.063-6.844 0-3.78-3.61-6.844-8.063-6.844-4.453 0-8.063 3.064-8.063 6.844 0 3.78 3.61 6.843 8.063 6.843z"
        stroke="#F1B600"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgUploadImageIcon;
