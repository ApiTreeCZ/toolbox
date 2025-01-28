declare module 'eslint-plugin-import' {
  import type { ESLint } from 'eslint';

  declare const plugin: ESLint.Plugin & {
    flatConfigs: {
      recommended: ESLint.Linter.Config;
      typescript: ESLint.Linter.Config;
    };
  };
  export default plugin;
}

declare module 'eslint-plugin-react-hooks' {
  import type { ESLint } from 'eslint';

  declare const plugin: ESLint.Plugin;
  export default plugin;
}
