import eslintRecommended from 'eslint/use-at-your-own-risk';
import typescriptParser from '@typescript-eslint/parser';
import typescriptRecommended from '@typescript-eslint/eslint-plugin';

export default [
  {
    files: ['**/*.ts'],
    ignores: ['node_modules/**'],
    languageOptions: {
      parser: typescriptParser,  // Use o parser correto como objeto
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptRecommended,
    },
    rules: {
      ...eslintRecommended.rules,
      ...typescriptRecommended.configs.recommended.rules,
    },
  },
];
