export default {
  './.changeset/**/*.{json,md}': 'prettier --write',
  './.github/**/*.{yml,yaml}': 'prettier --write',
  './*.js': 'eslint --cache --fix',
  './*.{js,json,md,yml,yaml}': 'prettier --write',
};
