import React, { Component } from 'react';
import _JSXStyle from 'styled-jsx/style';

export default class UC extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: 'UNDER CONSTRUCTION 🏗',
			font: true,
			counter: 0,
			buttonName: 'Add Another Crane 🏗'
		};
	}

	MoreCranes = () => {
		if (this.state.counter < 11) {
			if (this.state.font) {
				this.setState({
					text: '🏗 ' + this.state.text,
					font: false
				});
			} else {
				this.setState({
					text: this.state.text + ' 🏗',
					font: true
				});
			}
			this.setState({
				counter: this.state.counter + 1
			});
		} else {
			this.setState({
				buttonName: 'Okay, no more cranes 🤨'
			});
		}
	};

	render() {
		return (
			<div className="uc">
				<h3>{this.state.text}</h3>
				<div className="flat-button" onClick={this.MoreCranes}>
					{this.state.buttonName}
				</div>
				<style jsx>{`
					.uc {
						text-align: center;
						width: 100vw;
						margin-left: -50vw;
						margin-top: 20vh;
						left: 50%;
						position: relative;
					}

					h3 {
						line-height: 20vh;
						font-size: 2em;
					}

					button {
						padding: 20px;
						margin-bottom: 50px;
					}

					.flat-button {
						border-radius: 3px;
						position: relative;
						width: 250px;
						height: 60px;
						background: #e74c3c;
						margin: 0 auto;
						margin-top: 40px;
						overflow: hidden;
						z-index: 1;
						cursor: pointer;
						transition: color .3s;
						/* Typo */
						line-height: 60px;
						text-align: center;
						color: #fff;
					}

					.flat-button:after {
						position: absolute;
						top: 90%;
						left: 0;
						width: 100%;
						height: 100%;
						background: #c0392b;
						content: "";
						z-index: -2;
						transition: transform .3s;
					}

					.flat-button:hover::after {
						transform: translateY(-80%);
						transition: transform .3s;
					}
				`}</style>
			</div>
		);
	}
}
