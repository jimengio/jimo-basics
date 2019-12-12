import React, { FC } from "react";
import { css } from "emotion";

let ClampText: FC<{
  /** defaults to 1 */
  lines?: number;
  text: string;
}> = React.memo((props) => {
  let lines = props.lines || 1;
  /** Plugins */
  /** Methods */
  /** Effects */
  /** Renderers */

  if (lines === 1) {
    return <div className={styleSingleLine}>{props.text}</div>;
  }

  return (
    <div
      className={styleClampText}
      style={{
        WebkitLineClamp: lines,
      }}
    >
      {props.text}
    </div>
  );
});

export default ClampText;

// based on https://css-tricks.com/almanac/properties/l/line-clamp/
let styleClampText = css`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

let styleSingleLine = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
