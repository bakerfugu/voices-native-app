import * as React from "react";
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";

function SvgBackArrow(props) {
  return (
    <Svg
      width="100"
      height="100"
      viewBox="0 0 27 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path fill="url(#back-arrow_svg__pattern0)" d="M0 0h27v29H0z" />
      <Defs>
        <Pattern
          id="back-arrow_svg__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use
            xlinkHref="#back-arrow_svg__image0"
            transform="matrix(.0043 0 0 .004 -.037 0)"
          />
        </Pattern>
        <Image
          id="back-arrow_svg__image0"
          width={250}
          height={250}
          xlinkHref="data:image/png;base64,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ME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nPgo8cmRmOlJERiB4bWxuczpyZGY9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMnPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6QXR0cmliPSdodHRwOi8vbnMuYXR0cmlidXRpb24uY29tL2Fkcy8xLjAvJz4KICA8QXR0cmliOkFkcz4KICAgPHJkZjpTZXE+CiAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9J1Jlc291cmNlJz4KICAgICA8QXR0cmliOkNyZWF0ZWQ+MjAyMS0wMi0xNTwvQXR0cmliOkNyZWF0ZWQ+CiAgICAgPEF0dHJpYjpFeHRJZD5mYzY3MTIzMy00N2Y5LTQzYmYtYTlkMy1lMjUwOWQxYjcyMDk8L0F0dHJpYjpFeHRJZD4KICAgICA8QXR0cmliOkZiSWQ+NTI1MjY1OTE0MTc5NTgwPC9BdHRyaWI6RmJJZD4KICAgICA8QXR0cmliOlRvdWNoVHlwZT4yPC9BdHRyaWI6VG91Y2hUeXBlPgogICAgPC9yZGY6bGk+CiAgIDwvcmRmOlNlcT4KICA8L0F0dHJpYjpBZHM+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnBkZj0naHR0cDovL25zLmFkb2JlLmNvbS9wZGYvMS4zLyc+CiAgPHBkZjpBdXRob3I+VGF5bG9yIExhbGxhczwvcGRmOkF1dGhvcj4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6eG1wPSdodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvJz4KICA8eG1wOkNyZWF0b3JUb29sPkNhbnZhPC94bXA6Q3JlYXRvclRvb2w+CiA8L3JkZjpEZXNjcmlwdGlvbj4KPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0ncic/PnDPlcgAAAAASUVORK5CYII="
        />
      </Defs>
    </Svg>
  );
}

export default SvgBackArrow;
