import React, { Component } from 'react';

export default class Pin extends Component {
	constructor(props) {
		super(props);

		let pins = [];

		for (let i = 0; i < this.props.length; i++) {
			pins[i] = '';
		}

		this.state = {
			pin: pins
		};
	}

	_handleKeyDown = (current) => {
		let inputLength = event.target.value.toString().length;

		switch (event.key) {
			case 'Backspace':
				if (inputLength === 0 && current != 0) {
					this.refs[current].previousSibling.focus();
				}
				break;
			default:
				break;
		}
	};

	handleChange = (current) => {
		let pins = this.state.pin;

		let inputLength = event.target.value.toString().length;
		let input = event.target.value;

		if (inputLength > 1) {
			input = input.toString().slice(1, 2);
		}

		if (inputLength > 0 && current != this.props.length - 1) {
			this.refs[current].nextSibling.focus();
		}

		pins[current] = input;

		this.setState(
			{
				pin: pins
			},
			() => {
				let pins = '';
				this.state.pin.map((pin) => {
					pins += pin;
				});
				this.props.onChange(pins);
			}
		);
	};

	render() {
		return (
			<div>
				{this.state.pin.map((pinbox, key) => (
					<input
						onKeyDown={() => this._handleKeyDown(key)}
						onChange={() => this.handleChange(key)}
						value={pinbox}
						ref={key}
						className="pinBox"
						type="password"
					/>
				))}

				<style jsx>{`
					.pinBox {
						height: 75px;
						width: 75px;
						text-align: center;
						border-radius: 20px;
						background-color: #f5f5f5;
						border: none;
						margin: 5px;
					}
					.pinBox:focus {
						border-style: solid;
						border-width: 1px;
						border-color: #dadde4;
					}

					@media screen and (max-width: 600px) {
						.pinBox {
						height: 60px;
						width: 60px;
						text-align: center;
						border-radius: 15px;
						background-color: #f5f5f5;
						border: none;
						margin: 5px;
					}

				`}</style>
			</div>
		);
	}
}
