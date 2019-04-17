import React, { Component } from 'react';
import _JSXStyle from 'styled-jsx/style';

export class Ripo extends Component {
	render() {
		return (
			<div className="container fullScreen">
				<h1>Software is kinda cool</h1>
				<style jsx>{`
					.fullScreen {
						min-height: 100vh;
					}
				`}</style>
			</div>
		);
	}
}

export default Ripo;
