export default {
  './*.js': 'eslint --cache --fix',
  './*.{js,json,md,yml,yaml}': 'prettier --write',
  './.changeset/**/*.{json,md}': 'prettier --write',
  './.github/**/*.{yml,yaml}': 'prettier --write',
};
