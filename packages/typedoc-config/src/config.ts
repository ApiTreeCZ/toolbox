import type { TypeDocOptions } from 'typedoc';

const base = {
  entryPoints: ['./src/index.ts'],
  githubPages: false,
  gitRevision: 'main',
  out: './docs',
  plugin: ['typedoc-plugin-markdown'],
  readme: 'none',
} satisfies Partial<TypeDocOptions>;

const extra = {
  hideBreadcrumbs: true,
};

export const config = {
  ...base,
  ...extra,
};
