import { ActionPanel, Detail, List, Action, Icon } from "@raycast/api";
import tokens from "./tokens.js";

const getIcon = (token) => {
  if (token.type === "colour") return { source: Icon.CircleFilled, tintColor: token.computedValue };
  return { source: Icon.CircleFilled };
};

export default function Command() {
  return (
    <List>
      {tokens.map((token) => (
        <List.Item
          icon={getIcon(token)}
          key={token.key}
          title={token.key}
          subtitle={token.value === token.computedValue ? token.value : `${token.value}: ${token.computedValue}`}
          keywords={[token.value, token.computedValue, token.type]}
          whatevs={console.log([token.value, token.computedValue, token.type])}
          accessories={[{ text: "Some metadata", icon: Icon.EyeDropper }]}
          actions={
            <ActionPanel>
              <Action.CopyToClipboard title="Copy token name" content={token.key} />
              <Action.CopyToClipboard title="Copy token value" content={token.value} />
              <Action.OpenInBrowser title="Show in LFDS" url={token.url} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
