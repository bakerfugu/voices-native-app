import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFbShareIcon(props) {
  return (
    <Svg
      width="100"
      height="100"
      viewBox="0 0 70 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M69.297 36.587C69.297 16.916 53.877.97 34.857.97 15.829.974.408 16.916.408 36.592c0 17.773 12.597 32.507 29.059 35.179V46.883h-8.74V36.592h8.749v-7.854c0-8.924 5.144-13.853 13.01-13.853 3.77 0 7.71.694 7.71.694v8.761h-4.344c-4.275 0-5.61 2.748-5.61 5.566v6.681h9.549L48.267 46.88h-8.029v24.888C56.7 69.094 69.297 54.36 69.297 36.587z"
        fill="#000"
      />
    </Svg>
  );
}

export default SvgFbShareIcon;
