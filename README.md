# eslint-config-auk

Opinionated ESLint config used by Auk's React projects

## Usage

Install eslint-config-auk:

```
npm install --save-dev eslint-config-auk
```

Then, add it to your `eslint.config.mjs`:

```js
import auk from 'eslint-config-auk'

export default [
	...auk
	// your overrides
]
```

### Using with other shared configs (e.g. Next.js)

If you already have a shared config that registers overlapping plugins (like `eslint-config-next`), import just the
rules to avoid "Cannot redefine plugin" errors:

```js
import { rules as aukRules } from 'eslint-config-auk'
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'

export default [
	...nextCoreWebVitals,
	aukRules
	// your overrides
]
```

The `rules` export contains all of auk's rule configuration and settings without any plugin registrations, so it
composes cleanly with any config that already provides those plugins.
