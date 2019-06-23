import React, { Component } from 'react';
import getConfig from 'next/config';
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const client_id = publicRuntimeConfig.instagramClientID;

export default class InstaAuth extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				Please Login through Instagram to use the Application
				<a
					href={`https://api.instagram.com/oauth/authorize/?client_id=${client_id}&redirect_uri=${publicRuntimeConfig.thisSite +
						'/resources/inlink'}&response_type=token`}
				>
					<div>login</div>
				</a>
			</div>
		);
	}
}
