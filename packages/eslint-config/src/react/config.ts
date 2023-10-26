import { overrides } from './overrides';
import { rules } from './rules';

export const config = {
  extends: [
    '@apitree',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
  ],
  plugins: ['react', 'react-hooks'],
  rules,
  overrides,
  settings: {
    react: { version: 'detect' },
  },
};
