module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard',
        '@vue/typescript/recommended'
    ],
    parserOptions: {
        // parser: '@typescript-eslint/parser',
        // sourceType: 'module',
        // ecmaFeatures: {
        //     legacyDecorators: true
        // },
        ecmaVersion: 2020
    },
    rules: {
        quotes: [2, 'single'],
        indent: ['error', 4, { SwitchCase: 1 }],
        'space-before-blocks': [1, 'always'],
        'vue/max-attributes-per-line': 'off',
        'vue/no-use-v-if-with-v-for': 'off',
        'vue/no-v-html': 'off',

        'vue/script-indent': ['error', 4, {
            baseIndent: 0,
            switchCase: 0,
            ignores: []
        }],

        'vue/html-indent': ['error', 4, {
            attribute: 1,
            baseIndent: 1,
            closeBracket: 0,
            alignAttributesVertically: true,
            ignores: []
        }],
        'arrow-parens': 0,
        'generator-star-spacing': 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    },
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                indent: 'off'
            }
        },
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                jest: true
            }
        }
    ]
}
