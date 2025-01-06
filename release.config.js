/** @type {import('semantic-release').Options} */
export default {
	plugins: [
		[
			'@semantic-release/commit-analyzer',
			{
				preset: 'angular',
				parserOpts: {
					headerPattern: /^(\w*|Update):? (.*)$/,
					headerCorrespondence: ['type', 'message'],
					mergePattern: /^Merge pull request #(\\d+) from (.*)$/,
					mergeCorrespondence: ['id', 'source']
				},
				releaseRules: [
					{
						type: 'Update',
						release: 'patch'
					}
				]
			}
		],
		'@semantic-release/release-notes-generator',
		'@semantic-release/github',
		'@semantic-release/npm'
	]
}
