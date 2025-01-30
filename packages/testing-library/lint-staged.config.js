export default {
  './**/*.{js,ts,tsx}': 'eslint --cache --fix',
  './**/*.{js,json,md,ts,tsx}': 'prettier --write',
  './**/*.{ts,tsx}': [() => 'tsc --build tsconfig.json'],
};
