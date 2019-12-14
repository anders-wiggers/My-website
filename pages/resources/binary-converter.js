import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout.js';
import Converter from '../../components/Resources/Converter/Converter';
import SEO from 'react-seo-component';

export class binaryconverter extends Component {
	render() {
		return (
			<Layout title="Binary Converter" menu="res">
				<SEO
					title="Binary Converter"
					description="Decimal to binary conversion calculator with signed and unsigned bits."
					pathname="https://anderswiggers.dk/resources/binary-converter"
				/>
				<Converter />
			</Layout>
		);
	}
}

export default binaryconverter;
