import React, { Component } from 'react';
import Layout from '../components/Layout/Layout.js';
import XRP from '../components/Xrp/Xrp';

export class howsxrp extends Component {
	render() {
		return (
			<Layout title="XRP" menu="res">
				<div>
					<XRP />
				</div>
			</Layout>
		);
	}
}

export default howsxrp;
