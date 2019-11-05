import React, { FC } from "react";
import { css } from "emotion";
import { DocDemo, DocBlock, DocSnippet } from "@jimengio/doc-frame";
import { getLink } from "../../util/link";
import JimoButton from "../../../src/jimo-button";

let codeButton = `
<JimoButton text={"DEMO"} onClick={() => {}} />
`;

let codeFilled = `
<JimoButton text={"DEMO"} fillColor onClick={() => {}} />
`;

let codePrepend = `
<JimoButton prepend={"+"} text={"DEMO"} fillColor onClick={() => {}} />
`;

let DemoButtons: FC<{}> = React.memo((props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div>
      <DocDemo title={"Basic button"} link={getLink("buttons.tsx")} className={styleDemo}>
        <DocSnippet code={codeButton} />
        <JimoButton text={"DEMO"} onClick={() => {}} />
      </DocDemo>

      <DocDemo title={"Filled color"} link={getLink("buttons.tsx")} className={styleDemo}>
        <DocSnippet code={codeFilled} />
        <JimoButton text={"DEMO"} fillColor onClick={() => {}} />
      </DocDemo>

      <DocDemo title={"Prepend something(probably icons)"} link={getLink("buttons.tsx")} className={styleDemo}>
        <DocSnippet code={codePrepend} />
        <JimoButton prepend={`+`} text={"DEMO"} fillColor onClick={() => {}} />
      </DocDemo>
    </div>
  );
});

export default DemoButtons;

let styleDemo = css``;
