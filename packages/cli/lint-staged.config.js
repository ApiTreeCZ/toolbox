export default {
  './**/*.{js,ts}': 'eslint --cache --fix',
  './**/*.{js,json,md,ts}': 'prettier --write',
  './**/*.ts': [() => 'tsc --build tsconfig.json'],
};
