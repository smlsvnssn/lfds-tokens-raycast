import { List, ActionPanel, Action, Icon } from "@raycast/api";
import { Token, tokens } from "./tokens";

const getIcon = (token: Token) =>
  token.type === "colour" ?
    { source: Icon.CircleFilled, tintColor: token.computedValue }
  : { source: Icon.CircleFilled };

const getKeywords = (token: Token) => [
  ...token.value.split("-").filter((v) => v !== ""),
  ...token.computedValue.split("-").filter((v) => v !== ""),
  token.type,
];

const findTokens = () => (
  <List>
    {tokens.map((token) => (
      <List.Item
        icon={getIcon(token)}
        key={token.key}
        title={token.key}
        subtitle={
          token.value === token.computedValue ?
            token.value
          : `${token.value}: ${token.computedValue}`
        }
        keywords={getKeywords(token)}
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

export default findTokens;
