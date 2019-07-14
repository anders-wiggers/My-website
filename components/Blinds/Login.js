import React, { Component } from 'react';
import Pin from './Pin';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedin: false
		};
	}

	onLogin() {
		this.props.onLogin(true);
	}

	handleChange = (pins) => {
		console.log(`from pins: ${pins}`);
		if (pins === '1111') {
			console.log('Logged IN');
			this.onLogin();
		}
	};

	render() {
		return (
			<div>
				<div className="login">
					<h3>Enter Pin to Continue</h3>
					<Pin length={4} onChange={this.handleChange} />
				</div>

				<style jsx>{`
					.login {
						text-align: center;
						margin-top: 30vh;
					}

					@media screen and (max-width: 600px) {
						.login {
						margin-top: 20vh;
					}
				`}</style>
			</div>
		);
	}
}
