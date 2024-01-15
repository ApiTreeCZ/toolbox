export default {
  './**/.{cjs,js,ts}': 'eslint --cache --fix',
  './**/*.{json,md}': 'prettier --write',
};
