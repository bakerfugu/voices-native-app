import * as React from "react";
import Svg, { Ellipse, Path } from "react-native-svg";

function SvgMsgShareIcon(props) {
  return (
    <Svg
      width="100"
      height="100"
      viewBox="0 0 70 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Ellipse cx={34.848} cy={36.37} rx={34.44} ry={35.396} fill="#000" />
      <Path
        d="M34.356 11.233c-12.75 0-23.124 8.348-23.124 18.609 0 6.764 4.389 12.83 11.562 16.128v11.784l12.348-9.316C47.53 48.106 57.48 39.89 57.48 29.842c0-10.26-10.373-18.609-23.124-18.609zm0 32.565h-.77l-6.167 4.652v-5.622l-1.483-.575c-6.218-2.407-10.08-7.164-10.08-12.411 0-7.697 8.3-13.956 18.5-13.956s18.5 6.259 18.5 13.956c0 7.697-8.3 13.956-18.5 13.956z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgMsgShareIcon;
