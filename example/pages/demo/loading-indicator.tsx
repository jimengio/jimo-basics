import React, { FC, useState } from "react";
import { css } from "emotion";
import { DocDemo, DocSnippet } from "@jimengio/doc-frame";
import LoadingIndicator from "../../../src/loading-indicator";
import LoadingArea from "../../../src/loading-area";
import { Space } from "@jimengio/flex-styles";

let code = `
<LoadingIndicator />
`;

let codeArea = `
<LoadingArea isLoading={isLoading}>
  <div className={styleChild}>Children</div>
</LoadingArea>
`;

let DemoLoadingIndicator: FC<{}> = React.memo((props) => {
  let [isLoading, setLoading] = useState(false);

  /** Plugins */
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div>
      <DocDemo title={"Loading Indicator"}>
        <LoadingIndicator />
        <DocSnippet code={code} />
      </DocDemo>

      <DocDemo title={"Loading Area"}>
        <div>
          <a
            className={styleLink}
            onClick={() => {
              setLoading(!isLoading);
            }}
          >
            Toggle
          </a>
        </div>
        <Space height={8} />
        <LoadingArea isLoading={isLoading}>
          <div className={styleChild}>Children</div>
        </LoadingArea>

        <DocSnippet code={codeArea} />
      </DocDemo>
    </div>
  );
});

export default DemoLoadingIndicator;

let styleChild = css`
  width: 200px;
  height: 200px;
  background-color: #aaf;
`;

let styleLink = css`
  cursor: pointer;
`;
