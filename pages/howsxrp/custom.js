import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout/Layout.js';
import Creator from '../../components/Xrp/Creator.js';

export default class custom extends Component {
	static propTypes = {
		prop: PropTypes
	};

	render() {
		return (
			<Layout title="XRP" menu="res">
				<Creator />
			</Layout>
		);
	}
}
