import React, { FC, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { css, cx } from "emotion";
import { CSSTransition } from "react-transition-group";

let transitionDuration = 120;
let tipColor = "rgb(239,239,239)";

let BasicTooltip: FC<{
  visible: boolean;
  pointer: { x: number; y: number };
  text: string;
  className?: string;
}> = React.memo((props) => {
  let containerRef = useRef<HTMLDivElement>();

  /** Plugins */
  /** Methods */
  /** Effects */

  if (containerRef.current == null) {
    let el = document.createElement("div");
    el.className = styleTooltipContainer;
    containerRef.current = el;
  }

  useEffect(() => {
    document.body.appendChild(containerRef.current);
    return () => {
      containerRef.current.remove();
    };
  }, []);

  /** Renderers */
  return ReactDOM.createPortal(
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
    </CSSTransition>,
    containerRef.current
  );
});

export default BasicTooltip;

let styleTooptip = css`
  position: fixed;
  animation-timing-function: ease-in-out;
  opacity: 1;
  transform: translate(-50%, 0) scale(1);
  transition-property: opacity, transform;
  transform-origin: 50% calc(100% + 6px);
  background-color: ${tipColor};
  color: #323232;
  padding: 5px 8px;
  border-radius: 2px;
  font-size: 13px;
  max-width: 280px;
  font-size: 14px;
  line-height: 22px;

  white-space: normal;
  word-break: break-word;

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
    border-top: 8px solid ${tipColor};
    border-bottom: 0px solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    box-sizing: border-box;
  }

  :after {
    position: absolute;
    top: 100%;
    left: 0;
    height: 8px;
    width: 100%;
    content: "";
    background-color: transparent;
  }
`;

let styleTooltipContainer = css`
  z-index: 1200; /* display above modals */
  position: absolute;

  .fade-in-out-enter {
    opacity: 0.3;
    transform: translate(-50%, 0) scale(0.94);
  }
  .fade-in-out-enter-active {
    opacity: 1;
    transform: translate(-50%, 0) scale(1);
    transition-duration: ${transitionDuration}ms;
  }
  .fade-in-out-exit {
    opacity: 1;
    transform: translate(-50%, 0) scale(1);
  }
  .fade-in-out-exit-active {
    opacity: 0.3;
    transform: translate(-50%, 0) scale(0.94);
    transition-duration: ${transitionDuration}ms;
  }
`;
