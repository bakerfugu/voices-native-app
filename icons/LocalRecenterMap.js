import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLocalRecenterMap(props) {
  return (
    <Svg
      width="100"
      height="100"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M26 35.75a9.75 9.75 0 100-19.5 9.75 9.75 0 000 19.5zm2.438-33.313a2.438 2.438 0 10-4.875 0V6.65A19.51 19.51 0 006.65 23.563H2.436a2.438 2.438 0 100 4.875H6.65A19.51 19.51 0 0023.563 45.35v4.212a2.438 2.438 0 104.875 0V45.35A19.51 19.51 0 0045.35 28.437h4.212a2.438 2.438 0 100-4.875H45.35A19.51 19.51 0 0028.437 6.65V2.438zM26 40.626a14.624 14.624 0 110-29.248 14.624 14.624 0 010 29.248z"
        fill="#000"
      />
    </Svg>
  );
}

export default SvgLocalRecenterMap;
