import React, { FC } from "react";
import { css, cx } from "emotion";

import { HashRedirect, findRouteTarget } from "@jimengio/ruled-router/lib/dom";
import { genRouter, GenRouterTypeMain } from "controller/generated-router";
import { DocSidebar, ISidebarEntry } from "@jimengio/doc-frame";
import { fullscreen, row } from "@jimengio/flex-styles";
import DemoButtons from "./demo/buttons";
import DemoTodo from "./demo/todo";
import DemoTabs from "./demo/tabs";

let items: ISidebarEntry[] = [
  {
    title: "Buttons",
    path: genRouter.buttons.name,
  },
  {
    title: "Tabs",
    path: genRouter.tabs.name,
  },
  {
    title: "Todo page",
    path: genRouter.todo.name,
  },
];

const renderChildPage = (routerTree: GenRouterTypeMain) => {
  if (routerTree != null) {
    switch (routerTree.name) {
      case "buttons":
        return <DemoButtons />;
      case "todo":
        return <DemoTodo />;
      case "tabs":
        return <DemoTabs />;
      default:
        return <HashRedirect to={genRouter.buttons.name} noDelay></HashRedirect>;
    }
  }
  return <div>NOTHING</div>;
};

let onSwitchPage = (path: string) => {
  let target = findRouteTarget(genRouter, path);
  if (target != null) {
    target.go();
  }
};

let Container: FC<{
  router: GenRouterTypeMain;
}> = React.memo((props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={cx(fullscreen, row, styleContainer)}>
      <DocSidebar
        title="Jimo Basics"
        currentPath={props.router.name}
        onSwitch={(item) => {
          onSwitchPage(item.path);
        }}
        items={items}
      />

      <div className={styleBody}>{renderChildPage(props.router)}</div>
    </div>
  );
});

export default Container;

const styleContainer = css``;

let styleBody = css`
  padding: 16px;
`;
