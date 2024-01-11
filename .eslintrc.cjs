module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', 'prettier', 'react-refresh', '@typescript-eslint', 'react-hooks'],
  rules: {
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
}
