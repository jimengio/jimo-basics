import React, { FC } from "react";
import { css, cx } from "emotion";
import { row } from "@jimengio/flex-styles";
import { IJimoTabItem } from "../lib/jimo-tabs";

let themeColor = "hsl(222, 94%, 38%)";

/** 自定义 Tabs 组件, 选中时下划线颜色高亮 */
export let UnderlineTabs: FC<{
  // 有需求的话可以支持更多的类型
  value: string;
  items: IJimoTabItem[];
  onClick: (value: IJimoTabItem) => void;
}> = React.memo((props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={cx(row, styleUnderlineTabs)}>
      {props.items.map((item) => {
        return (
          <div
            key={item.key || item.title}
            onClick={() => props.onClick(item)}
            className={cx(styleUnderlineTab, props.value === item.value ? styleSelectedUnderline : null)}
          >
            {item.title}
          </div>
        );
      })}
    </div>
  );
});

export default UnderlineTabs;

let styleUnderlineTabs = css`
  padding: 0px 16px;
  margin: 8px 0;
  border-bottom: 1px solid rgba(232, 232, 232, 1);
`;

let styleUnderlineTab = css`
  color: ${themeColor};
  border-bottom: 2px solid white;
  cursor: pointer;
  margin-right: 4px;
  transition-duration: 240ms;
  line-height: 28px;
  padding: 0 12px;

  :hover {
    background-color: hsla(0, 0%, 98%, 1);
  }
`;

let styleSelectedUnderline = css`
  border-bottom: 2px solid ${themeColor};
`;
