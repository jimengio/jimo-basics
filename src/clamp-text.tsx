import React, { FC, useState, useRef } from "react";
import { css, cx } from "emotion";
import BasicTooltip from "./tooltip";

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
    if (!props.addTooltip) {
      return null;
    }
    return <BasicTooltip pointer={pointer} visible={showToopTip} className={props.tooltipClassName} text={props.text} />;
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
