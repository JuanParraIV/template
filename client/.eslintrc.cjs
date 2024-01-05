module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier','react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-empty-pattern': ['off'],
    'no-undef': ['error'],
    'no-var': ['error'],
    'no-unused-vars': [
      'warn',
      {
        destructuredArrayIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      },
    ],
    'object-curly-spacing': ['error', 'always'],
    indent: ['off'],
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        semi: false,
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: true,
        arrowParens: 'avoid',
      },
    ],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
    'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index'], 'object'],
        pathGroupsExcludedImportTypes: [],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '*.{json,graphql}',
            patternOptions: { matchBase: true, nocase: true },
            group: 'object',
            position: 'after',
          },
          {
            pattern: '*.{css,scss,eot,otf,ttf,woff,woff2,svg,jpg,jpeg,png,gif,html}',
            patternOptions: { matchBase: true, nocase: true },
            group: 'object',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
        
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.stories.@(ts|tsx)', '**/*.test.@(ts|tsx)', '**/tests/*.@(ts|tsx)', '@types/prop-types'],
      },
    ],
    'import/core-modules': 'off',
  },
  globals: {
    JSX: true,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        project: '**/tsconfig.json',
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      },
    },
  },
}
