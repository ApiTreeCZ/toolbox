import { config as react } from './react/config';

export = {
  ...react,
  extends: ['airbnb', './base', ...react.extends],
};
