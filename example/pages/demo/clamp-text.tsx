import React, { FC } from "react";
import { css } from "emotion";
import { DocDemo, DocBlock, DocSnippet } from "@jimengio/doc-frame";
import ClampText from "../../../src/clamp-text";
import { Space } from "@jimengio/flex-styles";

let text =
  "As of right now, it's browser support. Line clamps are part of the CSS Overflow Module Level 3 which is currently in Editor's Draft and totally unsupported at the moment.";

let DemoClampText: FC<{}> = React.memo((props) => {
  /** Plugins */
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div>
      <DocDemo title={"Single line"}>
        <DocBlock content={contentInline} />
        <DocSnippet code={codeInline} />
        <div className={styleNarrow}>
          <ClampText text={text} />
        </div>
      </DocDemo>

      <DocDemo title={"multiple lines"}>
        <DocBlock content={contentMultilpeLines} />
        <DocSnippet code={code2Lines} />
        <div className={styleNarrow}>
          <ClampText lines={2} text={text} />

          <Space height={16} />
        </div>

        <Space height={16} />

        <DocSnippet code={code4Lines} />
        <div className={styleNarrow}>
          <ClampText lines={4} text={text} />
        </div>
      </DocDemo>

      <DocDemo title={"Tooltips"}>
        <DocBlock content={contentTooltip} />
        <DocSnippet code={codeTooltip} />
        <div className={styleNarrow}>
          <ClampText text={text} addTooltip />
          <Space height={40} />
          <ClampText text={text} lines={2} addTooltip />
          <Space height={40} />
          <ClampText text={"短就不显示"} addTooltip />
        </div>
        <Space height={40} />

        <DocBlock content={contentTooltipState} />
        <DocSnippet code={codeTooltipState} />
        <div className={styleNarrow}>
          <ClampText
            text={text}
            lines={2}
            onTooltipStateChange={(visible) => {
              console.log("Tooltip visible", visible);
            }}
          />
        </div>
      </DocDemo>
    </div>
  );
});

export default DemoClampText;

let styleNarrow = css`
  width: 200px;
  border: 1px solid #eee;
`;

let contentInline = `
单行的文字用省略号隐藏超出宽度的部分. 注意这时用的标签是 div.
`;

let contentMultilpeLines = `
多行的文字省略通过私有属性 \`-webkit-line-clamp\` 来实现. 某些浏览器会存在兼容性问题. 具体具体参考 https://css-tricks.com/almanac/properties/l/line-clamp/ .
`;

let codeInline = `<ClampText text={text} />`;

let code2Lines = `<ClampText lines={2} text={text} />`;

let code4Lines = `<ClampText lines={4} text={text} />`;

let contentTooltip = `有内容被省略的位置, 可以通过 \`addTooltip\` 属性控制显示完整内容`;

let codeTooltip = `<ClampText text={text} addTooltip />`;

let codeTooltipState = `
<ClampText
  text={text}
  lines={2}
  onTooltipStateChange={(visible) => {
    console.log("Tooltip visible", visible);
  }}
/>
`;

let contentTooltipState = `
通过 \`onTooltipStateChange\` 可以获取是否需要显示 Tooltip 这个状态.
`;
