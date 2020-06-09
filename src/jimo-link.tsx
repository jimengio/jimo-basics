import React, { FC } from "react";
import { css, cx } from "emotion";

/** Jimo 主题的按钮, 定制了颜色样式 */
let JimoLink: FC<{ text: string; className?: string; onClick: () => void }> = React.memo((props) => {
  /** Plugins */
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <a tabIndex={0} className={cx(styleLink, props.className)} onClick={props.onClick}>
      {props.text}
    </a>
  );
});

export default JimoLink;

let styleLink = css`
  color: hsl(221, 100%, 61%);
  cursor: pointer;
  user-select: none;

  &:hover {
    color: hsl(222, 100%, 72%);
  }

  &:focus {
    outline: none;
  }

  &:active {
    color: hsl(222, 100%, 61%);
  }
`;
