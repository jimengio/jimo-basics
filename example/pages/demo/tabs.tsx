import React, { FC, useState } from "react";
import { css } from "emotion";
import { DocDemo } from "@jimengio/doc-frame";
import { getLink } from "util/link";
import JimoTabs, { IJimoTabItem, UnderlineTabs } from "../../../src/jimo-tabs";

let items: IJimoTabItem[] = [{ title: "A", value: "a" }, { title: "This is b", value: "b" }];

let DemoTabs: FC<{}> = React.memo((props) => {
  let [tab, setTab] = useState(null as string);

  /** Methods */
  /** Effects */
  /** Renderers */

  return (
    <div>
      <DocDemo title="Tabs" link={getLink("tabs.tsx")}>
        <JimoTabs
          items={items}
          value={tab}
          onClick={(value) => {
            setTab(value.value);
          }}
        />
      </DocDemo>

      <DocDemo title="Tabs" link={getLink("tabs.tsx")}>
        <UnderlineTabs
          items={items}
          value={tab}
          onClick={(value) => {
            setTab(value.value);
          }}
        />
      </DocDemo>
    </div>
  );
});

export default DemoTabs;
