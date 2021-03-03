import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTextShareIcon(props) {
  return (
    <Svg
      width="100"
      height="100"
      viewBox="0 0 47 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M23.124 0C10.374 0 0 8.348 0 18.608c0 6.764 4.389 12.83 11.562 16.129v11.784l12.348-9.316c12.388-.333 22.338-8.548 22.338-18.597C46.248 8.348 35.875 0 23.124 0zm0 32.565h-.77l-6.167 4.652v-5.622l-1.483-.575c-6.217-2.407-10.08-7.164-10.08-12.412 0-7.697 8.3-13.956 18.5-13.956s18.5 6.26 18.5 13.956c0 7.697-8.3 13.957-18.5 13.957z"
        fill="#000"
      />
    </Svg>
  );
}

export default SvgTextShareIcon;
