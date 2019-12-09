// Bouncing dots based on https://tobiasahlin.com/spinkit/

import React, { FC } from "react";
import { css, cx, keyframes } from "emotion";

let LoadingIndicator: FC<{
  className?: string;
  dotClassName?: string;
}> = React.memo((props) => {
  /** Plugins */
  /** Methods */
  /** Effects */
  /** Renderers */

  return (
    <div className={cx(styleSpinner, props.className)}>
      <div className={cx(styleBounce, props.dotClassName, styleB1)}></div>
      <div className={cx(styleBounce, props.dotClassName, styleB2)}></div>
      <div className={cx(styleBounce, props.dotClassName)}></div>
    </div>
  );
});

export default LoadingIndicator;

let styleSpinner = css`
  margin: 8px;
  width: 70px;
  text-align: center;
`;

let styleSkBounceDelay = keyframes`
  0%, 80%, 100% { transform: scale(0) }
  40% { transform: scale(1.0) }
`;

let styleBounce = css`
  width: 18px;
  height: 18px;
  background-color: #ccc;

  border-radius: 100%;
  display: inline-block;
  -webkit-animation: ${styleSkBounceDelay} 1.4s infinite ease-in-out both;
  animation: ${styleSkBounceDelay} 1.4s infinite ease-in-out both;
`;

let styleB1 = css`
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
`;

let styleB2 = css`
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
`;
