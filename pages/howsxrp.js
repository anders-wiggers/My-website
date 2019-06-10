import React, { Component } from 'react';
import Layout from '../components/Layout/Layout.js';
import XRP from '../components/Xrp/Xrp';
import XRPCustom from '../components/Xrp/XrpCustom';

import { withRouter } from 'next/router';

export class howsxrp extends Component {
	constructor(props) {
		super(props);
	}

	renderDefault() {
		return (
			<Layout title="XRP" menu="res">
				<div>
					<XRP />
				</div>
			</Layout>
		);
	}

	renderQuery() {
		const { router } = this.props;

		return (
			<Layout title={`XRP Custom Tracker`} menu="res">
				<XRPCustom lewd={router.query.custom} />
			</Layout>
		);
	}

	render() {
		const { router } = this.props;
		console.log(router.query);

		let isQuery = false;
		if (!router.query.custom) {
			isQuery = true;
		}

		console.log(isQuery);
		return isQuery ? this.renderDefault() : this.renderQuery();
	}
}

export default withRouter(howsxrp);
