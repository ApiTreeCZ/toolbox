import type { Linter } from 'eslint';

import { getExtraneousDependenciesRule, getImportExtensionsRule } from '../../utils';

export const imports: Linter.RulesRecord = {
  ...getImportExtensionsRule('.tsx'), // Avoid unnecessary `.tsx` extensions in imports
  ...getExtraneousDependenciesRule('**/mock/**/*', '**/mocks/**/*', '**/stories/**/*'), // Allow importing devDependencies in Storybook stories
};
