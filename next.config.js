// next.config.js
//const withCSS = require('@zeit/next-css');
//module.exports = withCSS();
module.exports = {
	serverRuntimeConfig: {
		// Will only be available on the server side
	},
	publicRuntimeConfig: {
		// Will be available on both server and client
		localApi: 'http://localhost:3001',
		thisSite: 'http://localhost:3000'
	}
};
