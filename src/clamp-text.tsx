import React, { FC, useState, useRef, CSSProperties, useReducer } from "react";
import { css, cx } from "emotion";
import BasicTooltip from "./tooltip";

let ClampText: FC<{
  /** defaults to 1 */
  lines?: number;
  text: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  tooltipClassName?: string;
  addTooltip?: boolean;
  onTooltipStateChange?: (visible?: boolean) => void;
  /** defaults to 160ms, for both enter and leave */
  delay?: number;
  /** respond to clicks on text, not including tooltop */
  onTextClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}> = React.memo((props) => {
  let elRef = useRef<HTMLDivElement>();
  let enteringTimeoutRef = useRef<NodeJS.Timeout>(null);
  let leavingTimeoutRef = useRef<NodeJS.Timeout>(null);

  let [showToopTip, setShowTooltip] = useState(false);
  let [pointer, setPointer] = useState({ x: 0, y: 0 });

  let lines = props.lines || 1;
  let delay = props.delay ?? 160;

  /** Plugins */
  /** Methods */

  let detectTruncated = () => {
    let el = elRef.current;

    let truncated = el.offsetHeight < el.scrollHeight || el.offsetWidth < el.scrollWidth;

    if (props.addTooltip || props.onTooltipStateChange != null) {
      let rect = el.getBoundingClientRect() as DOMRect;

      setShowTooltip(truncated);
      setPointer({
        x: rect.left + el.offsetWidth / 2,
        y: rect.top,
      });

      if (props.onTooltipStateChange != null) {
        props.onTooltipStateChange(truncated);
      }
    }
  };

  let handleEnter = () => {
    if (enteringTimeoutRef.current != null) {
      return;
    }

    if (leavingTimeoutRef.current != null) {
      clearTimeout(leavingTimeoutRef.current);
      leavingTimeoutRef.current = null;
    }

    enteringTimeoutRef.current = setTimeout(() => {
      detectTruncated();
      enteringTimeoutRef.current = null;
    }, delay);
  };

  let handleLeave = () => {
    if (leavingTimeoutRef.current != null) {
      return;
    }

    if (enteringTimeoutRef.current != null) {
      clearTimeout(enteringTimeoutRef.current);
      enteringTimeoutRef.current = null;
    }

    leavingTimeoutRef.current = setTimeout(() => {
      setShowTooltip(false);
      if (props.onTooltipStateChange != null && showToopTip) {
        props.onTooltipStateChange(false);
      }
      leavingTimeoutRef.current = null;
    }, delay);
  };

  let onTextClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === elRef.current) {
      props.onTextClick(event);
    }
  };

  /** Effects */
  /** Renderers */

  let renderTooltip = () => {
    if (!props.addTooltip) {
      return null;
    }
    return <BasicTooltip pointer={pointer} visible={showToopTip} className={props.tooltipClassName} text={props.text} />;
  };

  if (lines === 1) {
    return (
      <div
        className={cx(styleSingleLine, props.className)}
        style={props.style}
        ref={elRef}
        onMouseEnter={() => {
          handleEnter();
        }}
        onMouseLeave={() => {
          handleLeave();
        }}
        onClick={onTextClick}
      >
        {props.text}
        {renderTooltip()}
      </div>
    );
  }

  return (
    <div
      className={styleClampText}
      ref={elRef}
      style={{
        WebkitLineClamp: lines,
        ...props.style,
      }}
      onMouseEnter={() => {
        handleEnter();
      }}
      onMouseLeave={() => {
        handleLeave();
      }}
      onClick={onTextClick}
    >
      {props.text}
      {renderTooltip()}
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

  max-width: 100%;
  word-break: break-word;
`;

let styleSingleLine = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  max-width: 100%;
  word-break: break-word;
`;
