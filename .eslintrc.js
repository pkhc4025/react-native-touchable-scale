module.exports = {
    root: true,
    extends: ['@react-native', 'plugin:prettier/recommended', 'plugin:import/recommended', 'plugin:import/typescript'],
    plugins: ['import'],
    settings: {
        'import/resolver': {
            typescript: true,
            node: true,
        },
        'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
        // 'import/internal-regex': '^@(uniport)'
    },
    rules: {
        indent: 'off',
        'prettier/prettier': ['error', { printWidth: 120, tabWidth: 4 }], // When changing, 'printWidth' in '.prettierrc' also needs to be changed. default: 80
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/ban-types': ['error', { types: { Function: false, Object: false } }],
        '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': false }],
        '@typescript-eslint/no-unused-vars': 'warn',
        'import/namespace': 'off',
        'import/no-named-as-default-member': 'off',
        'import/order': [
            'error',
            {
                warnOnUnassignedImports: true,
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
                'newlines-between': 'never',
            },
        ],
    },
};
