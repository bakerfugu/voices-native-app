import * as React from "react";
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";

function SvgPrevStoryIcon(props) {
  return (
    <Svg
      width="100"
      height="100"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path
        transform="rotate(-180 35 35)"
        fill="url(#prev-story-icon_svg__pattern0)"
        d="M35 35h35v35H35z"
      />
      <Defs>
        <Pattern
          id="prev-story-icon_svg__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use
            xlinkHref="#prev-story-icon_svg__image0"
            transform="scale(.004)"
          />
        </Pattern>
        <Image
          id="prev-story-icon_svg__image0"
          width={250}
          height={250}
          xlinkHref="data:image/png;base64,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PjUyNTI2NTkxNDE3OTU4MDwvQXR0cmliOkZiSWQ+CiAgICAgPEF0dHJpYjpUb3VjaFR5cGU+MjwvQXR0cmliOlRvdWNoVHlwZT4KICAgIDwvcmRmOmxpPgogICA8L3JkZjpTZXE+CiAgPC9BdHRyaWI6QWRzPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpwZGY9J2h0dHA6Ly9ucy5hZG9iZS5jb20vcGRmLzEuMy8nPgogIDxwZGY6QXV0aG9yPlRheWxvciBMYWxsYXM8L3BkZjpBdXRob3I+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnhtcD0naHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyc+CiAgPHhtcDpDcmVhdG9yVG9vbD5DYW52YTwveG1wOkNyZWF0b3JUb29sPgogPC9yZGY6RGVzY3JpcHRpb24+CjwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9J3InPz6L5p1WAAAAAElFTkSuQmCC"
        />
      </Defs>
    </Svg>
  );
}

export default SvgPrevStoryIcon;
