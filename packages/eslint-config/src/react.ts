import { config as base } from './base/config';
import { config as react } from './react/config';

export = {
  ...base,
  ...react,
  extends: ['airbnb', ...base.extends, ...react.extends],
};
