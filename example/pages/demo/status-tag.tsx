import React, { FC } from "react";
import { css } from "emotion";
import { DocDemo, DocSnippet } from "@jimengio/doc-frame";
import StatusTag from "../../../src/status-tag";
import { Space } from "@jimengio/flex-styles";

let DemoStatusTag: FC<{ className?: string }> = React.memo((props) => {
  /** Plugins */
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={props.className}>
      <DocDemo title={"Status Tag"}>
        <div>
          <StatusTag disabled={false} />
          <Space width={8} />
          <StatusTag disabled={true} />
          <Space width={8} />
          <StatusTag disabled={false} normalText={"正常"} />
          <Space width={8} />
          <StatusTag disabled={true} disabledText={"禁用"} />
          <Space width={8} />
          <StatusTag disabled={true} text={"TODO"} />
          <Space width={8} />
          <StatusTag disabled={false} text={"TODO"} />
        </div>
        <DocSnippet code={"<StatusTag disabled={true} />"} />
      </DocDemo>
    </div>
  );
});

export default DemoStatusTag;
