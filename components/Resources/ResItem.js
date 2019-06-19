import React, { Component, useState } from 'react';
import Link from 'next/link';

export class ResItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			link: `/resources?title=${this.props.name}`
		};
		if (this.props.link != null) {
			this.state = {
				link: `/${this.props.link}`
			};
		}
	}

	render() {
		return (
			<Link href={this.state.link}>
				<div className="box">
					<div className="fader" />
					<div className="inner">
						<h3>{this.props.name}</h3>
						<p>{this.props.disc}</p>
					</div>

					<style jsx>{`
						.fader {
							position: relative;
							width: 100%;
							height: 50px;
							z-index: 1;
							/* background-color: blue; */
							background: -moz-linear-gradient(
								top,
								rgba(255, 255, 255, 0) 0%,
								rgba(95, 196, 221, 1) 100%
							);
							background: -webkit-linear-gradient(
								top,
								rgba(255, 255, 255, 0) 0%,
								rgba(95, 196, 221, 1) 100%
							);
							background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgb(0, 175, 224) 100%);
							filter: progid:DXImageTransform.Microsoft.gradient(
									startColorstr='#00ffffff',
									endColorstr='#5fc4dd',
									GradientType=0
								);
							margin-bottom: -200px;
							margin-top: 140px;
						}
						.box {
							overflow: hidden;
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

						@media screen and (max-width: 600px) {
							.box {
								margin: 0 auto;
							}
						}
					`}</style>
				</div>
			</Link>
		);
	}
}

export default ResItem;
