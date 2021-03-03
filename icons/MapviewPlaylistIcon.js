import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMapviewPlaylistIcon(props) {
  return (
    <Svg
      width="100"
      height="100"
      viewBox="0 0 38 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.565.226c.136.094.246.212.321.346A.87.87 0 0138 1v28a.91.91 0 01-.27.634 1.243 1.243 0 01-.685.346l-11.875 2a1.409 1.409 0 01-.465 0l-11.642-1.96L1.42 31.98c-.172.03-.35.026-.52-.01a1.285 1.285 0 01-.465-.197 1.046 1.046 0 01-.32-.345.871.871 0 01-.115-.427V3c0-.231.095-.455.27-.634.173-.179.416-.301.685-.346l11.875-2c.153-.026.312-.026.465 0l11.643 1.96L36.58.02c.172-.03.35-.026.52.01.17.035.33.102.465.196zM23.75 3.82l-9.5-1.6v25.96l9.5 1.6V3.82zm2.375 25.96l9.5-1.6V2.22l-9.5 1.6v25.96zm-14.25-1.6V2.22l-9.5 1.6v25.96l9.5-1.6z"
        fill="#000"
      />
    </Svg>
  );
}

export default SvgMapviewPlaylistIcon;
