export type Token = {
  key: string;
  value: string;
  computedValue: string;
  type: string;
  url: string;
};

type TokenList = Token[];

export const tokens: TokenList = [
  {
    key: "--lf-color-primary",
    value: "--lf-color-red",
    computedValue: "#e30613",
    type: "colour",
    url: "https://lfds.netlify.app/visual-identity/colours/",
  },
  {
    key: "--lf-color-secondary",
    value: "--lf-color-blue",
    computedValue: "#005AA0",
    type: "colour",
    url: "https://lfds.netlify.app/visual-identity/colours/",
  },
];
