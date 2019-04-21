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
				<button onClick={this.MoreCranes}>{this.state.buttonName}</button>
				<style jsx>{`
					.uc {
						text-align: center;
						width: 100vw;
						margin-left: -50vw;
						margin-top: 100px;
						left: 50%;
						position: relative;
						color: black;
						border-top: dotted;
						border-bottom: dotted;
						border-color: red;
					}

					h3 {
						line-height: 20vh;
						font-size: 2em;
					}

					button {
						padding: 20px;
						margin-bottom: 50px;
					}
				`}</style>
			</div>
		);
	}
}
