module.exports = {
  extends: ['.'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    'unicorn/prefer-module': 'off',
  },
};
