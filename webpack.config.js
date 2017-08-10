const framework = require('web-toolbox/src/configs/webpack.js');
const entries = {
	'signup': './src/js/index.tsx'
};
const options = {
	filename: '[name].js',
	assetsPlugin: false,
	devServer: {
		port: process.env.DEV_SERVER_PORT,
		componentName: 'signup'
	}
};

let config = framework.defaultConfig(__dirname, entries, options);
config.resolve.extensions.push('.ts');
config.resolve.extensions.push('.tsx');
config.module.loaders.push(
	{ test: /\.tsx?$/, loader: 'ts-loader', exclude: ['node_modules'] }
);

module.exports = config;
