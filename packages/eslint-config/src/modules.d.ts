declare module 'eslint-plugin-import' {
  import { Linter } from 'eslint';

  export default {
    flatConfigs: {
      recommended: Linter.Config,
    },
  };
}

declare module 'eslint-plugin-react-hooks' {
  import { ESLint } from 'eslint';

  declare const plugin: ESLint.Plugin;
  export default plugin;
}
