import { ActionPanel, Detail, List, Action, Icon, Color } from "@raycast/api";

export default function Command() {
  return (
    <List>
      <List.Item
        icon={{ source: Icon.CircleFilled, tintColor: "#e30613" }}
        title="Red"
        subtitle="--lf-color-primary: #e30613"
        accessories={[{ text: "Some metadata", icon: Icon.EyeDropper }]}
        actions={
          <ActionPanel>
            <Action.CopyToClipboard title="Copy token name" content="#1" />
            <Action.CopyToClipboard title="Copy token value" content="#1" />
            <Action.OpenInBrowser title="Show in LFDS" url="https://github.com/raycast/extensions/pull/1" />
          </ActionPanel>
        }
      />
      <List.Item
        icon={{ source: Icon.CircleFilled, tintColor: "#005AA0" }}
        title="Blue"
        subtitle="--lf-color-secondary: #005AA0"
        accessories={[{ text: "Some metadata", icon: Icon.EyeDropper }]}
        actions={
          <ActionPanel>
            <Action.CopyToClipboard title="Copy token name" content="#1" />
            <Action.CopyToClipboard title="Copy token value" content="#1" />
            <Action.OpenInBrowser title="Show in LFDS" url="https://github.com/raycast/extensions/pull/1" />
          </ActionPanel>
        }
      />
    </List>
  );
}
