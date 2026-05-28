import type { Linter } from 'eslint';

export const formatjs: Linter.RulesRecord = {
  'formatjs/enforce-default-message': ['error', 'literal'], // Require literal default message (needed for extraction)
  'formatjs/enforce-placeholders': 'error', // Require placeholder values being passed to message with placeholders
  'formatjs/no-complex-selectors': 'error', // Disallow selectors with high complexity in messages
  'formatjs/no-invalid-icu': 'error', // Disallow invalid ICU syntax in messages
  'formatjs/no-literal-string-in-jsx': 'warn', // Warn about literal strings in JSX (prefer messages)
  'formatjs/no-multiple-plurals': 'error', // Disallow multiple plurals in messages
  'formatjs/no-multiple-whitespaces': 'error', // Disallow multiple whitespaces in messages
  'formatjs/no-offset': 'error', // Disallow offset in plural rules
  'formatjs/no-useless-message': 'error', // Disallow useless messages (e.g. a message that only has a placeholder and no text)
  'formatjs/prefer-pound-in-plural': 'error', // Use # in plural args to reference the count instead of repeating the argument
};
