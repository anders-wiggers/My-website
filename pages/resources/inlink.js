import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout.js';
import InstaAuth from '../../components/Inlink/InstaAuth';
import Inlink from '../../components/Inlink/InLink';

import { withRouter } from 'next/router';
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';

class inlink extends Component {
	constructor(props) {
		super(props);
		this.state = {
			accestotken: this.props.router.asPath.split('=')[1]
		};
		console.log(this.state.accestotken);
	}

	renderAuthed() {
		return (
			<Layout>
				<Inlink token={this.state.accestotken} />
			</Layout>
		);
	}

	renderLogin() {
		return (
			<Layout>
				<InstaAuth />
			</Layout>
		);
	}

	render() {
		let hasToken = false;
		if (!this.state.accestotken) {
			hasToken = true;
		}

		return hasToken ? this.renderLogin() : this.renderAuthed();
	}
}

export default withRouter(inlink);
