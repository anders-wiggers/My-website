import React, { Component, useState } from 'react';
import Link from 'next/link';

export class ResItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Link href="/resources">
				<div className="box">
					<div className="inner">
						<h3>{this.props.name}</h3>
						<p>{this.props.disc}</p>
					</div>
					<style jsx>{`
						.box {
							width: 250px;
							height: 200px;
							background: #5fc4dd;
							background: -moz-linear-gradient(top, #5fc4dd 0%, #00afe0 100%);
							background: -webkit-linear-gradient(top, #5fc4dd 0%, #00afe0 100%);
							background: linear-gradient(to bottom, #5fc4dd 0%, #00afe0 100%);
							filter: progid:DXImageTransform.Microsoft.gradient(
									startColorstr='#5fc4dd',
									endColorstr='#00afe0',
									GradientType=0
								);
							-webkit-box-shadow: 0px 5px 9px -1px rgba(84, 84, 84, 0.29);
							-moz-box-shadow: 0px 5px 9px -1px rgba(84, 84, 84, 0.29);
							box-shadow: 0px 5px 9px -1px rgba(84, 84, 84, 0.29);
							padding: 10px;
							display: table-cell;
							border-radius: 4px;
							cursor: pointer;
						}
						.inner {
							color: white;
							padding: 10px;
						}
					`}</style>
				</div>
			</Link>
		);
	}
}

export default ResItem;
