import React, { FC, useState } from "react";
import { css, cx } from "emotion";
import LoadingIndicator from "./loading-indicator";
import { center } from "@jimengio/flex-styles";

let LoadingArea: FC<{
  isLoading?: boolean;
  className?: string;
}> = React.memo((props) => {
  /** Plugins */
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={cx(styleContainer, props.className)}>
      {props.children}
      {props.isLoading ? (
        <div className={cx(center, styleCover)}>
          <LoadingIndicator />
        </div>
      ) : null}
    </div>
  );
});

export default LoadingArea;

let styleContainer = css`
  position: relative;
`;

let styleCover = css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: hsl(0, 0%, 100%, 0.7);
`;
