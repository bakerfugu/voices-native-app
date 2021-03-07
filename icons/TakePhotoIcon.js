import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTakePhotoIcon(props) {
  return (
    <Svg
      width="100"
      height="100"
      viewBox="0 0 89 80"
      fill="#FFFF"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M85.292 63.333c0 1.768-.782 3.464-2.173 4.714C81.73 69.297 79.842 70 77.875 70h-66.75c-1.967 0-3.853-.702-5.244-1.953-1.391-1.25-2.173-2.946-2.173-4.714V26.667c0-1.768.782-3.464 2.173-4.714C7.27 20.703 9.158 20 11.125 20h14.833l7.417-10h22.25l7.417 10h14.833c1.967 0 3.853.702 5.244 1.953 1.391 1.25 2.173 2.946 2.173 4.714v36.666z"
        stroke="#F1B600"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M44.5 56.667c8.192 0 14.833-5.97 14.833-13.334S52.693 30 44.5 30c-8.192 0-14.833 5.97-14.833 13.333 0 7.364 6.64 13.334 14.833 13.334z"
        stroke="#F1B600"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgTakePhotoIcon;
