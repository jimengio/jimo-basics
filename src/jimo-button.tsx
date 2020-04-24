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
  disabled?: boolean;
  onClick: (event: React.MouseEvent<any, MouseEvent>) => void;
}> = React.memo((props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  let hasPrepend = props.prepend != null;
  let bordered = !props.fillColor && !props.canceling && !props.disabled;

  return (
    <div
      className={cx(
        rowCenter,
        styleButton,
        props.className,
        props.fillColor && !props.disabled ? styleFilled : null,
        props.canceling && !props.disabled ? styleCanceling : null,
        bordered ? styleBordered : null,
        props.disabled ? styleDisabled : null
      )}
      onClick={(event) => {
        if (props.disabled) {
          return;
        }

        props.onClick?.(event);
      }}
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
  min-width: 76px;
  display: inline-flex;
  height: 32px;
  line-height: 32px;
  padding: 0 16px;
  color: ${themeColor};
  border-radius: 2px;
  cursor: pointer;
  vertical-align: middle;
  transition-duration: 240ms;
  user-select: none;
  font-size: 14px;
`;

let styleFilled = css`
  background-color: ${themeColor};
  color: white;

  :hover {
    opacity: 0.7;
  }

  &:active {
    background-color: #1755e0;
    color: white;
    opacity: 1;
  }
`;

let styleBordered = css`
  border: 1px solid ${themeColor};
  padding: 0 15px;

  :hover {
    opacity: 0.7;
  }

  &:active {
    border-color: #1755e0;
    color: #1755e0;
    opacity: 1;
  }
`;

let styleCanceling = css`
  border-radius: 2px;
  color: hsla(0, 0%, 0%, 0.65);
  border: 1px solid rgba(217, 217, 217, 1);

  :hover {
    opacity: 0.7;
  }

  :active {
    color: hsla(0, 0%, 0%, 0.65);
    border: 1px solid rgba(217, 217, 217, 1);
    opacity: 1;
  }
`;

let styleDisabled = css`
  background-color: hsla(0, 0%, 92%, 1);
  border-color: hsla(0, 0%, 92%, 1);
  color: hsla(0, 0%, 59%, 1);
  cursor: not-allowed;
`;
