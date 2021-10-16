module.exports = {
	preset: 'ts-jest',
	transform: {
		'^.+\\.(ts|tsx)?$': 'ts-jest',
		'^.+\\.(js|jsx)$': 'babel-jest',
		'\\.js$': '<rootDir>/node_modules/babel-jest',
	},
	moduleNameMapper: {
		'\\.(css|scss)$': 'identity-obj-proxy',
	},
};
