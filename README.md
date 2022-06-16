# eslint-config-auk

Opinionated ESLint config used by Auk's React projects

## Usage

Install eslint-config-auk:

Using NPM:

```
npm install --save-dev eslint-config-auk
```

With Yarn:

```
yarn add -D eslint-config-auk
```

Then, add eslint-config-auk to the "extends" array in your ESLint file (`.eslintrc` or `.eslintrc.js`). Make sure to put
it last if you want to override other configs.

```json
{
	"extends": ["auk"]
}
```
