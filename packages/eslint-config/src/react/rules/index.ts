import { common } from './common';
import { formatjs } from './formatjs';
import { hooks } from './hooks';
import { imports } from './imports';
import { jsx } from './jsx';

export const rules = {
  ...common,
  ...formatjs,
  ...hooks,
  ...imports,
  ...jsx,
};
