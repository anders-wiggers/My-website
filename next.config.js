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
		thisSite: 'http://localhost:3000',
		instagramClientID: 'f0184d77e2c24cd58ef1405183c554d8',
		instagramSecrit: '0555230d1f004143ae25e4dd4cf57967'
	}
};
