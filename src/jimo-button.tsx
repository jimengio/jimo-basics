import React, { FC, ReactNode } from "react";
import { css, cx } from "emotion";
import { rowCenter } from "@jimengio/flex-styles";
import { Space } from "@jimengio/flex-styles";

let themeColor = "hsla(221, 100%, 61%, 1)";

let JimoButton: FC<{
  prepend?: ReactNode;
  text: string;
  className?: string;
  fillColor?: boolean;
  /** special style for cancel button, with very shallow border color */
  canceling?: boolean;
  onClick: () => void;
}> = React.memo((props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  let hasPrepend = props.prepend != null;

  return (
    <div
      className={cx(rowCenter, styleButton, props.className, props.fillColor ? styleFilled : null, props.canceling ? styleCanceling : null)}
      onClick={props.onClick}
    >
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
  border-radius: 2px;
  cursor: pointer;
  vertical-align: middle;
  transition-duration: 240ms;
  user-select: none;
  font-size: 14px;

  &:active {
    transform: scale(1.04);
    transition-duration: 0ms;
  }

  :hover {
    background-color: hsla(0, 0%, 98%, 1);
    box-shadow: 1px 1px 3px hsla(0, 0%, 0%, 0.1);
  }
`;

let styleFilled = css`
  background-color: ${themeColor};
  color: white;

  :hover {
    background-color: ${themeColor};
  }
`;

let styleCanceling = css`
  border-radius: 2px;
  border: 1px solid rgba(217, 217, 217, 1);
`;
