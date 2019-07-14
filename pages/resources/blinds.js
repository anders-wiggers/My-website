import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout.js';
import Login from '../../components/Blinds/Login';
import Dashboard from '../../components/Blinds/Dashboard';

export class Blinds extends Component {
	constructor(props) {
		super(props);
		this.state = {
			LoggedIn: true
		};
	}
	handleLogin = (status) => {
		this.setState({
			LoggedIn: status
		});
	};

	renderLogon() {
		return (
			<Layout title="Our Blinds :)" menu="res">
				<Login onLogin={this.handleLogin} />
			</Layout>
		);
	}

	renderLoggedIn() {
		return (
			<Layout title="Our Blinds :)" menu="res">
				<Dashboard />
			</Layout>
		);
	}

	render() {
		return this.state.LoggedIn ? this.renderLoggedIn() : this.renderLogon();
	}
}

export default Blinds;
