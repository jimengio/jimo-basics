import React, { FC, useState, useRef } from "react";
import { css, cx } from "emotion";

let ClampText: FC<{
  /** defaults to 1 */
  lines?: number;
  text: string;
  className?: string;
  tooltipClassName?: string;
  addTooltip?: boolean;
  onTooltipStateChange?: (visible?: boolean) => void;
}> = React.memo((props) => {
  let elRef = useRef<HTMLDivElement>();

  let [showToopTip, setShowTooltip] = useState(false);
  let [pointer, setPointer] = useState({ x: 0, y: 0 });

  let lines = props.lines || 1;

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

  let handleLeave = () => {
    setShowTooltip(false);
    if (props.onTooltipStateChange != null && showToopTip) {
      props.onTooltipStateChange(false);
    }
  };

  /** Effects */
  /** Renderers */

  let renderTooltip = () => {
    if (props.addTooltip && showToopTip) {
      return (
        <div
          className={cx(styleTooptip, props.tooltipClassName)}
          style={{
            left: pointer.x,
            bottom: window.innerHeight - pointer.y + 6,
          }}
        >
          {props.text}
        </div>
      );
    }
  };

  if (lines === 1) {
    return (
      <div
        className={cx(styleSingleLine, props.className)}
        ref={elRef}
        onMouseEnter={() => {
          detectTruncated();
        }}
        onMouseLeave={() => {
          handleLeave();
        }}
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
      }}
      onMouseEnter={() => {
        detectTruncated();
      }}
      onMouseLeave={() => {
        handleLeave();
      }}
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

let styleTooptip = css`
  position: fixed;
  transform: translate(-50%, 0);
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
