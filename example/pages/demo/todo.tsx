import React, { FC } from "react";
import { css } from "emotion";
import { DocDemo, DocSnippet } from "@jimengio/doc-frame";
import TodoFeature from "../../../src/todo-feature";
import { getLink } from "util/link";

let code = `
<TodoFeature title="A not finished feature" description={"Some description"} />
`;

let DemoTodo: FC<{}> = React.memo((props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div>
      <DocDemo title={"a todo placeholder"} link={getLink("todo.tsx")}>
        <TodoFeature title="A not finished feature" />
      </DocDemo>

      <DocDemo title={"a todo placeholder"} link={getLink("todo.tsx")}>
        <TodoFeature title="A not finished feature" description={"Some description"} />
        <DocSnippet code={code} />
      </DocDemo>
    </div>
  );
});

export default DemoTodo;
