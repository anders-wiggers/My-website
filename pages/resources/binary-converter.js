import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout.js';
import Converter from '../../components/Resources/Converter/Converter';

export class binaryconverter extends Component {
	render() {
		return (
			<Layout title="Binary Converter" menu="res">
				<Converter />
			</Layout>
		);
	}
}

export default binaryconverter;
