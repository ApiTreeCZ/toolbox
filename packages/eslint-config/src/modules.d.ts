declare module 'eslint-config-prettier' {
  import type { Linter } from 'eslint';

  declare const config: Linter.Config;
  export default config;
}

declare module 'eslint-plugin-import' {
  import type { ESLint, Linter } from 'eslint';

  export declare const flatConfigs: {
    recommended: Linter.Config;
    typescript: Linter.Config;
  };

  declare const plugin: ESLint.Plugin;
  export default plugin;
}

declare module 'eslint-plugin-react-hooks' {
  import type { ESLint } from 'eslint';

  declare const plugin: ESLint.Plugin;
  export default plugin;
}
