import React, { FC } from "react";
import { css, cx } from "emotion";
import { DocDemo } from "@jimengio/doc-frame";
import { rowMiddle, Space } from "@jimengio/flex-styles";
import CopyCode from "./copied";

let textSizes = [
  {
    title: "标题大小",
    code: "16px",
  },
  {
    title: "标题行高",
    code: "22px",
  },
  {
    title: "标题外边距",
    code: "32px 0 16px 0",
  },
  {
    title: "普通文字大小",
    code: "14px",
  },
  {
    title: "普通文字行高",
    code: "20px",
  },
];

let uiSizes = [
  {
    title: "线框常用内边距",
    code: "12px 16px",
  },
  {
    title: "(特定)footer 间距",
    code: "16px",
  },
  {
    title: "元素 border 到另一个元素 border 间距",
    code: "12px",
  },
  {
    title: "元素 border 到另一个块文字间距",
    code: "8px",
  },
  {
    title: "文字到另一块文字间距",
    code: "8px",
  },
  {
    title: "图标到紧随的文字",
    code: "4px",
  },
];

let tableSizes = [
  {
    title: "目前只能大致约定, 以 40 为单位",
    code: "120px 160px 200px...",
  },
];

let formSizes = [
  {
    title: "label 区域默认宽度",
    code: "120px",
  },
  {
    title: "input/textarea/select 常用的统一宽度",
    code: "220px",
  },
  {
    title: "表单内上下内边距, 跟按钮之间的间距",
    code: "16px",
  },
];

let listSizes = [
  {
    title: "List item 高度(含图标文字的情况)",
    code: "36px",
  },
  {
    title: "List item 纵向内边距",
    code: "8px",
  },
];

let DemoLayoutSizes: FC<{}> = React.memo((props) => {
  /** Plugins */
  /** Methods */
  /** Effects */
  /** Renderers */

  let renderLine = (x: { title: string; code: string }) => {
    return (
      <div className={cx(rowMiddle, styleLine)}>
        <div className={styleIntro}>{x.title}</div>
        <Space width={16} />
        <CopyCode code={x.code} />
      </div>
    );
  };

  return (
    <div className={styleContainer}>
      <DocDemo title="文字大小行高">
        {textSizes.map((x) => {
          return renderLine(x);
        })}
      </DocDemo>
      <DocDemo title="页面布局常用尺寸">
        {uiSizes.map((x) => {
          return renderLine(x);
        })}
      </DocDemo>
      <DocDemo title="表格(Table)内布局相关">
        {tableSizes.map((x) => {
          return renderLine(x);
        })}
      </DocDemo>
      <DocDemo title="表单(Form)元素布局相关">
        {formSizes.map((x) => {
          return renderLine(x);
        })}
      </DocDemo>
      <DocDemo title=" 列表(List)局部相关">
        {listSizes.map((x) => {
          return renderLine(x);
        })}
      </DocDemo>
    </div>
  );
});

export default DemoLayoutSizes;

let styleIntro = css`
  width: 66%;
  font-size: 14px;
  line-height: 30px;
`;

let styleLine = css`
  padding: 4px 12px;

  :hover {
    background-color: hsla(0, 0%, 0%, 0.02);
  }
`;

let styleContainer = css`
  padding-bottom: 200px;
`;
