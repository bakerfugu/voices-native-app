import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgUsersLocationCircle(props) {
  return (
    <Svg
      width="100"
      height="100"
      viewBox="0 0 109 109"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#users-location-circle_svg__clip0)">
        <Path
          d="M34.298 29.858c-13.554 11.063-15.266 31.24-3.78 44.56 11.019 12.77 30.312 14.51 43.315 3.905C87.39 67.26 89.1 47.083 77.613 33.766c-11.02-12.774-30.312-14.513-43.315-3.908zm22.847 5.8l8.602 29.385c.463 1.666-1.704 2.804-2.821 1.472l-8.62-10.272a.603.603 0 00-.844-.076L43.245 64.74c-1.32 1.107-3.252-.386-2.52-1.942l13.412-27.412a1.597 1.597 0 011.593-.913 1.616 1.616 0 011.415 1.184z"
          fill="#2BB2FF"
        />
      </G>
      <Defs>
        <ClipPath id="users-location-circle_svg__clip0">
          <Path
            fill="#fff"
            transform="rotate(-40 67.612 24.609)"
            d="M0 0h76.569v76.971H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgUsersLocationCircle;
