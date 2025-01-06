// eslint-disable-next-line no-undef, importPlugin/no-commonjs
module.exports = {
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
