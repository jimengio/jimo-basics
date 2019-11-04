import React, { FC } from "react";
import { css, cx } from "emotion";
import { row } from "@jimengio/flex-styles";

let themeColor = "hsl(222, 94%, 38%)";

export interface IJimoTabItem {
  key?: string;
  value: string;
  title: string;
}

/** 自定义 Tabs 组件, 选中时整个背景改变颜色 */
let JimoTabs: FC<{
  // 有需求的话可以支持更多的类型
  value: string;
  items: IJimoTabItem[];
  onClick: (value: IJimoTabItem) => void;
}> = React.memo((props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={styleTabs}>
      {props.items.map((item) => {
        return (
          <div key={item.key || item.title} onClick={() => props.onClick(item)} className={cx(styleTab, props.value === item.value ? styleSelected : null)}>
            {item.title}
          </div>
        );
      })}
    </div>
  );
});

export default JimoTabs;

let styleTabs = css`
  display: inline-flex;
`;

let styleTab = css`
  min-width: 72px;
  line-height: 26px;
  border-radius: 1px 0px 0px 1px;
  border: 1px solid rgba(232, 232, 232, 1);
  text-align: center;
  padding: 0 8px;
  color: hsla(0, 0%, 44%, 1);
  cursor: pointer;
`;

let styleSelected = css`
  background-color: ${themeColor};
  color: white;
`;

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

let styleUnderlineTabs = css`
  padding: 0px 16px;
  margin: 8px 0;
  border-bottom: 1px solid rgba(232, 232, 232, 1);
`;

let styleUnderlineTab = css`
  color: ${themeColor};
  border: 2px solid white;
  margin-right: 16px;
  cursor: pointer;
  line-height: 28px;
`;

let styleSelectedUnderline = css`
  border-bottom: 2px solid ${themeColor};
`;
