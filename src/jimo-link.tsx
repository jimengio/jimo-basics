import React, { FC, ReactNode } from "react";
import { css, cx } from "emotion";

interface IProps extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  text?: ReactNode;
  className?: string;
  onClick: () => void;
}

/** Jimo 主题的按钮, 定制了颜色样式 */
let JimoLink: FC<IProps> = React.memo((props) => {
  /** Plugins */
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <a tabIndex={0} className={cx(styleLink, props.className)} onClick={props.onClick}>
      {props.text || props.children || "-"}
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
    color: hsl(222, 100%, 72%);
    outline: none;
  }

  &:active {
    color: hsl(222, 100%, 61%);
  }
`;
