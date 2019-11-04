import React, { FC, ReactNode } from "react";
import { css, cx } from "emotion";
import { rowCenter } from "@jimengio/flex-styles";
import { Space } from "@jimengio/flex-styles";

let themeColor = "hsl(222, 94%, 38%)";

let JimoButton: FC<{ prepend?: ReactNode; text: string; className?: string; fillColor?: boolean; onClick: () => void }> = React.memo((props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  let hasPrepend = props.prepend != null;

  return (
    <div className={cx(rowCenter, styleButton, props.className, props.fillColor ? styleFilled : null)} onClick={props.onClick}>
      {hasPrepend ? (
        <>
          {props.prepend}
          <Space width={8} />
        </>
      ) : null}
      {props.text}
    </div>
  );
});

export default JimoButton;

const styleButton = css`
  min-width: 80px;
  display: inline-flex;
  height: 32px;
  line-height: 32px;
  padding: 0 16px;
  color: ${themeColor};
  border: 1px solid ${themeColor};
  border-radius: 1px;
  cursor: pointer;
  vertical-align: middle;
  transition-duration: 200ms;
  user-select: none;

  &:active {
    transform: scale(1.04);
    transition-duration: 0ms;
  }
`;

let styleFilled = css`
  background-color: ${themeColor};
  color: white;
`;
