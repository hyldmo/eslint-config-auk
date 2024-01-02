// See https://github.com/eslint/eslint/issues/3458#issuecomment-1148245615
// require('@rushstack/eslint-patch/modern-module-resolution')

const enabled = 'error' // Used to set error level across rules

module.exports = {
	env: {
		browser: true,
		node: true
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest'
	},
	plugins: ['github'],
	extends: [
		'eslint:recommended',
		'plugin:github/browser',
		'plugin:github/typescript',
		'plugin:github/react',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended'
	],
	rules: {
		'@typescript-eslint/array-type': [enabled, { default: 'array-simple' }],
		'@typescript-eslint/consistent-type-definitions': [enabled, 'interface'], // See https://github.com/microsoft/TypeScript/wiki/Performance#preferring-interfaces-over-intersections
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-unused-vars': [enabled, { argsIgnorePattern: '_' }],
		'@typescript-eslint/no-use-before-define': 'off',
		'@typescript-eslint/prefer-for-of': enabled,
		'@typescript-eslint/prefer-function-type': enabled,
		'@typescript-eslint/unified-signatures': enabled,

		'react/jsx-curly-brace-presence': enabled,
		'react/no-array-index-key': 'off',
		'react/prop-types': 'off',
		'react/self-closing-comp': enabled,

		'import/extensions': 'off', // Handled by typescript
		'import/no-nodejs-modules': 'off', // Makes too many assumptions
		'import/no-unresolved': 'off', // Handled by typescript

		'github/array-foreach': enabled,
		'arrow-body-style': [enabled, 'as-needed'],
		'arrow-parens': [enabled, 'as-needed'],
		'constructor-super': enabled,
		'dot-notation': enabled,
		'guard-for-in': enabled,
		'id-blacklist': [enabled, 'any', 'number', 'String', 'string', 'Boolean', 'boolean'],
		'id-match': enabled,
		'linebreak-style': [enabled, 'unix'],
		'max-classes-per-file': [enabled, 1],
		'new-parens': enabled,
		'no-bitwise': enabled,
		'no-caller': enabled,
		'no-cond-assign': enabled,
		'no-console': [enabled, { allow: ['info', 'warn', enabled, 'debug'] }],
		'no-constant-binary-expression': enabled,
		'no-debugger': enabled,
		'no-duplicate-case': enabled,
		'no-empty': enabled,
		'no-eval': enabled,
		'no-extra-bind': enabled,
		'no-fallthrough': 'off',
		'no-invalid-this': 'off',
		'no-mixed-spaces-and-tabs': 'off', // Not needed with prettier on
		'no-multiple-empty-lines': [enabled, { max: 1 }],
		'no-new-func': enabled,
		'no-new-wrappers': enabled,
		'no-redeclare': 'off', // Uses typescripts version
		'no-restricted-imports': [enabled],
		'no-return-await': enabled,
		'no-sequences': enabled,
		'no-shadow': [enabled, { hoist: 'all' }],
		'no-sparse-arrays': enabled,
		'no-template-curly-in-string': enabled,
		'no-throw-literal': enabled,
		'no-undef-init': enabled,
		'no-unsafe-finally': enabled,
		'object-shorthand': enabled,
		'one-var': [enabled, 'never'],
		'prefer-arrow-callback': enabled,
		'prefer-object-spread': enabled,
		'prefer-template': enabled,
		'quote-props': [enabled, 'consistent-as-needed'],
		'space-in-parens': enabled,
		'spaced-comment': [enabled, 'always', { markers: ['/'] }],
		'use-isnan': enabled
	}
}
