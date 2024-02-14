type Meta = {
  key: string;
  value: string | number;
};

export type Token = {
  key: string;
  value: string;
  computedValue: string;
  type: string;
  url: string;
  meta?: Meta[];
};

type TokenList = Token[];

export const tokens: TokenList = [
  {
    key: "--lf-color-primary",
    value: "--lf-color-red",
    computedValue: "#e30613",
    type: "colour",
    url: "https://lfds.netlify.app/visual-identity/colours/",
    meta: [
      { key: "Some metadata", value: 0 },
      { key: "More metadata", value: "XYZ" },
    ],
  },
  {
    key: "--lf-color-secondary",
    value: "--lf-color-blue",
    computedValue: "#005AA0",
    type: "colour",
    url: "https://lfds.netlify.app/visual-identity/colours/",
  },
];
