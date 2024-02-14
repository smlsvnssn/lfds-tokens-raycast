import { List, ActionPanel, Action, Icon } from "@raycast/api";
import { Token, tokens } from "./tokens";

const getIcon = (token: Token): object =>
  token.type === "colour" ?
    { source: Icon.CircleFilled, tintColor: token.computedValue }
  : { source: Icon.CircleFilled };

const getKeywords = (token: Token): string[] => [
  ...token.value.split("-").filter((v) => v !== ""),
  ...token.computedValue.split("-").filter((v) => v !== ""),
  token.type,
];

const getMeta = (token: Token): object[] =>
  token.meta ? token.meta.map((m) => ({ text: `${m.key}: ${m.value}` })) : [];

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
        accessories={getMeta(token)}
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
