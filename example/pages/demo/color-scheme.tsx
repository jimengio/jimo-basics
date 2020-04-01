import React, { FC, useState } from "react";
import { css, cx } from "emotion";
import { DocDemo } from "@jimengio/doc-frame";
import { colorScheme } from "../../../src/color-scheme";
import { row, rowMiddle, center, Space } from "@jimengio/flex-styles";
import copy from "copy-to-clipboard";
import CopyCode from "./copied";

let mainColors = [
  {
    color: colorScheme.indigo,
    copy: "colorScheme.indigo",
    intro: "弹窗内标题文字、内容区域标题文字",
  },
  {
    color: colorScheme.blue,
    copy: "colorScheme.blue",
    intro: "内容区域主视觉配色，正常、进行中颜色",
  },
  {
    color: colorScheme.indigo,
    copy: "colorScheme.indigo",
    intro: "弹窗内标题文字、内容区域标题文字",
  },
  {
    color: colorScheme.yellow,
    copy: "colorScheme.yellow",
    intro: "收藏选中色",
  },
  {
    color: colorScheme.red,
    copy: "colorScheme.red",
    intro: "已拒绝颜色、被禁用颜色",
  },
  {
    color: colorScheme.green,
    copy: "colorScheme.green",
    intro: "正常、进行中颜色",
  },
  {
    color: colorScheme.grey,
    copy: "colorScheme.grey",
    intro: "正常、进行中颜色",
  },
];

let borderColors = [
  {
    color: colorScheme.border.main,
    copy: "colorScheme.border.main",
    intro: "边框颜色",
  },
  {
    color: colorScheme.border.hover,
    copy: "colorScheme.border.hover",
    intro: "边框 hover 颜色",
  },
  {
    color: colorScheme.border.highlight,
    copy: "colorScheme.border.highlight",
    intro: "边框高亮颜色颜色",
  },
  {
    color: colorScheme.border.divider,
    copy: "colorScheme.border.divider",
    intro: "分割线颜色",
  },
];

let fontColors = [
  {
    color: colorScheme.font.main,
    copy: "colorScheme.font.main",
    intro: "文字主色",
  },
  {
    color: colorScheme.font.title,
    copy: "colorScheme.font.title",
    intro: "弹窗内标题文字、内容区域标题文字",
  },
  {
    color: colorScheme.font.tableContent,
    copy: "colorScheme.font.tableContent",
    intro: "表格内文字",
  },
  {
    color: colorScheme.font.label,
    copy: "colorScheme.font.label",
    intro: "label文字颜色，左边导航栏未选中文字文案颜色",
  },
  {
    color: colorScheme.font.secondary,
    copy: "colorScheme.font.secondary",
    intro: "内容区域文字、输入框内文字、面包屑除最后一级文字颜色",
  },
  {
    color: colorScheme.font.placeholder,
    copy: "colorScheme.font.placeholder",
    intro: "内容区域文字、输入框内文字、面包屑除最后一级文字颜色",
  },
  {
    color: colorScheme.font.link,
    copy: "colorScheme.font.link",
    intro: "文案选中颜色",
  },
  {
    color: colorScheme.font.hoverLink,
    copy: "colorScheme.font.hoverLink",
    intro: "文案选中颜色",
  },
];

let DemoColorScheme: FC<{}> = React.memo((props) => {
  /** Plugins */
  /** Methods */
  /** Effects */
  /** Renderers */

  let renderColor = (color: string, intro: string) => {
    return (
      <div key={color} className={rowMiddle}>
        <div className={cx(center, styleColor)} style={{ backgroundColor: color }}>
          {color}
        </div>
        <Space width={16} />
        <div style={{ color: color }} className={styleText}>
          {color}
        </div>
        <Space width={16} />
        <div className={styleIntro}>{intro}</div>
      </div>
    );
  };

  return (
    <div className={styleContainer}>
      <DocDemo title="主色" className={styleDemo}>
        {mainColors.map((theme) => {
          let { color, intro } = theme;
          return (
            <div key={color} className={cx(rowMiddle, styleCase)}>
              <div className={cx(center, styleColor)} style={{ backgroundColor: color }}>
                {color}
              </div>
              <Space width={16} />
              <div style={{ color: color }} className={styleText}>
                {color}
              </div>
              <Space width={16} />
              <CopyCode code={theme.copy} />
              <Space width={16} />
              <div className={styleIntro}>{intro}</div>
            </div>
          );
        })}
      </DocDemo>
      <DocDemo title="文字颜色" className={styleDemo}>
        {fontColors.map((theme) => {
          let { color, intro } = theme;
          return (
            <div key={color} className={cx(rowMiddle, styleCase)}>
              <div style={{ color: color }} className={styleText}>
                {color}
              </div>
              <Space width={16} />
              <CopyCode code={theme.copy} />
              <Space width={16} />
              <div className={styleIntro} style={{ color: color }}>
                {intro}
              </div>
            </div>
          );
        })}
      </DocDemo>
      <DocDemo title="边框颜色" className={styleDemo}>
        {borderColors.map((theme) => {
          let { color, intro } = theme;
          return (
            <div key={color} className={cx(rowMiddle, styleCase)}>
              <div className={cx(center, styleBorders)} style={{ borderColor: color }}>
                {color}
              </div>
              <Space width={16} />
              <CopyCode code={theme.copy} />
              <Space width={16} />
              <div style={{ borderColor: color }} className={styleUnderline}></div>
              <Space width={16} />
              <div className={styleIntro}>{intro}</div>
            </div>
          );
        })}
      </DocDemo>
    </div>
  );
});

export default DemoColorScheme;

let styleColor = css`
  width: 200px;
  height: 40px;
  color: white;
  font-size: 13px;
`;

let styleText = css`
  width: 200px;
  text-align: center;
  font-size: 14px;
`;

let styleIntro = css`
  font-size: 14px;
`;

let styleCase = css`
  line-height: 28px;
`;

let styleBorders = css`
  border: 1px solid white;
  margin: 8px;
  min-width: 200px;
  font-size: 13px;
  color: ${colorScheme.font.secondary};
`;

let styleUnderline = css`
  border-style: solid;
  border-width: 0 0 1px 0;
  width: 200px;
`;

let styleContainer = css`
  padding-bottom: 200px;
`;

let styleDemo = css`
  max-width: 100%;
`;
