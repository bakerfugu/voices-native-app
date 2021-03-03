import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgNavigationIcon(props) {
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
        d="M4.623 4.37c-5.97 5.833-5.97 15.488 0 21.322 5.728 5.593 14.929 5.593 20.657 0 5.973-5.834 5.972-15.488 0-21.32-5.728-5.595-14.929-5.595-20.657-.003zm11.046 1.776l5.251 13.586c.286.772-.694 1.405-1.276.82l-4.492-4.51a.285.285 0 00-.403 0l-4.491 4.51c-.58.581-1.555-.045-1.271-.815l5.247-13.591a.766.766 0 01.717-.502.762.762 0 01.718.502z"
        fill="#000"
      />
    </Svg>
  );
}

export default SvgNavigationIcon;
