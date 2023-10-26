import type { Linter } from 'eslint';

import {
  getExtraneousDependenciesRule,
  getImportExtensionsRule,
} from '../../utils';

export const imports: Linter.RulesRecord = {
  ...getImportExtensionsRule('.tsx'),
  ...getExtraneousDependenciesRule('/stories/**/*'),
};
