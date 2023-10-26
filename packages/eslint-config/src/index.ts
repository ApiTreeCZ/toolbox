import { config } from './base/config';

export = {
  ...config,
  extends: ['airbnb-base', ...config.extends],
};
