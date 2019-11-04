import React, { FC } from "react";
import { css } from "emotion";
import { DocDemo, DocBlock } from "@jimengio/doc-frame";
import { getLink } from "../../util/link";
import JimoButton from "../../../src/jimo-button";

let DemoButtons: FC<{}> = React.memo((props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div>
      <DocBlock
        content={`
\`\`\`tsx
<IconButton prepend={"+"}
            text={"DEMO"}
            fillColor
            onClick={() => {}} />
\`\`\`
`}
      />
      <DocDemo title={"Basic button"} link={getLink("buttons.tsx")} className={styleDemo}>
        <JimoButton text={"DEMO"} onClick={() => {}} />
      </DocDemo>

      <DocDemo title={"Filled color"} link={getLink("buttons.tsx")} className={styleDemo}>
        <JimoButton text={"DEMO"} fillColor onClick={() => {}} />
      </DocDemo>

      <DocDemo title={"Prepend something(probably icons)"} link={getLink("buttons.tsx")} className={styleDemo}>
        <JimoButton prepend={`+`} text={"DEMO"} fillColor onClick={() => {}} />
      </DocDemo>
    </div>
  );
});

export default DemoButtons;

let styleDemo = css``;
