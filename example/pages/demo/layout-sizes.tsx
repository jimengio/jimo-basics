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
    code: "TODO",
  },
  {
    title: "标题外边距",
    code: "TODO",
  },
  {
    title: "普通文字大小",
    code: "14px",
  },
  {
    title: "普通文字行高",
    code: "TODO",
  },
];

let uiSizes = [
  {
    title: "App body 页面, 内边距参数",
    code: "12px 16px",
  },
  {
    title: "分组和内容等, 常用的纵向间距(border 到 border, 或者文字到文字, 文字到 border)",
    code: "12px 16px",
  },
  {
    title: "行内元素间距(border 到 border, border 到文字, 可能有图标)",
    code: "TODO",
  },
  {
    title: "框内常用内边距(border 到文字), 纵向",
    code: "TODO",
  },
];

let tableSizes = [
  {
    title: "名称等长度相对固定的, 超出用 ClampText, 一般默认宽度",
    code: "TODO",
  },
  {
    title: "状态标签 column, 数字 column, 宽度较为确定(考虑到英文其实还是会伸长), 一般默认宽度",
    code: "TODO",
  },
  {
    title: "操作 column",
    code: "TODO",
  },
];

let formSizes = [
  {
    title: "label 区域默认宽度",
    code: "TODO",
  },
  {
    title: "input/textarea/select 常用的统一宽度",
    code: "220px",
  },
  {
    title: "表单内上下边距",
    code: "TODO",
  },
];

let listSizes = [
  {
    title: "List 单行的高度",
    code: "TODO",
  },
  {
    title: "List 单行的宽度",
    code: "TODO",
  },
  {
    title: "List 单行的边距",
    code: "TODO",
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
    <div>
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
