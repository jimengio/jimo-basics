import React, { FC } from "react";
import { css, cx } from "emotion";
import { CSSTransition } from "react-transition-group";

let transitionDuration = 120;

let BasicTooltip: FC<{
  visible: boolean;
  pointer: { x: number; y: number };
  text: string;
  className?: string;
}> = React.memo((props) => {
  /** Plugins */
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <span className={styleTooltipContainer}>
      <CSSTransition in={props.visible} timeout={transitionDuration} classNames="fade-in-out" unmountOnExit>
        <div
          className={cx(styleTooptip, props.className)}
          style={{
            left: props.pointer.x,
            bottom: window.innerHeight - props.pointer.y + 6,
          }}
        >
          {props.text}
        </div>
      </CSSTransition>
    </span>
  );
});

export default BasicTooltip;

let styleTooptip = css`
  position: fixed;
  transform: translate(-50%, 0);
  transform-origin: 50% calc(100% + 6px);
  background-color: hsl(0, 0%, 0%);
  color: white;
  padding: 4px 6px;
  border-radius: 3px;
  font-size: 13px;
  max-width: 320px;

  white-space: normal;

  :before {
    position: absolute;
    top: 100%;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    width: 20px;
    height: 8px;
    margin: auto;
    content: "";
    pointer-events: auto;
    border-top: 8px solid black;
    border-bottom: 0px solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    box-sizing: border-box;
  }
`;

let styleTooltipContainer = css`
  z-index: 900;

  .fade-in-out-enter {
    opacity: 0.3;
    transform: translate(-50%, 0) scale(0.94);
  }
  .fade-in-out-enter-active {
    opacity: 1;
    transform: translate(-50%, 0) scale(1);
    transition-property: opacity transform;
    transition-duration: ${transitionDuration}ms;
  }
  .fade-in-out-exit {
    opacity: 1;
    transform: translate(-50%, 0) scale(1);
  }
  .fade-in-out-exit-active {
    opacity: 0.3;
    transform: translate(-50%, 0) scale(0.94);
    transition-property: opacity transform;
    transition-duration: ${transitionDuration}ms;
  }
`;
