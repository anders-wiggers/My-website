import React, { Component } from 'react';

export default class SimpleImage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="img">
				<img className="correctSize" src={this.props.url} />
				<div className="hover">
					<div className="da fas fa-link" />
				</div>
				<style jsx global>{`
					.img {
						width: 33%;
						display: inline-block;
						padding: 10px;
						position: relative;
						text-align: center;
						color: white;
					}

					.correctSize {
						display: block;
						margin-left: auto;
						margin-right: auto;
						width: 100%;
						border-radius: 20px;
					}

					.correctSize:hover {
					}

					.hover {
						position: absolute;
						width: 90%;
						height: 90%;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
						color: black;
					}

					.da {
						margin-top: 45%;
					}
					.hover:hover {
						color: white;
						background-color: #0000001f;
						border-radius: 30px;
						cursor: pointer;
					}

					.correctSize:hover {
						background: black;
					}
				`}</style>
			</div>
		);
	}
}
