import React, { Component } from 'react';
import axios from 'axios';
import SimpleImage from './SimpleImage';
import Menu from './dashmenu';
import Dashboard from './dashboard';
import Loading from '../Loading';

export default class InLink extends Component {
	constructor(props) {
		super(props);
		this.state = {
			validToken: 'false',
			data: [],
			user: {},
			currentPage: 'dash'
		};
		this.handleChangeSite = this.handleChangeSite.bind(this);
	}

	componentDidMount() {
		axios
			.get(
				window.encodeURI(
					`https://api.instagram.com/v1/users/self/media/recent/?access_token=${this.props.token}`
				)
			)
			.then((response) => {
				this.setState({
					validToken: true,
					fetch2: true,
					data: response.data
				});
			})
			.catch((error) => {
				this.setState({
					validToken: false
				});
			});
		axios
			.get(window.encodeURI(`https://api.instagram.com/v1/users/self/?access_token=${this.props.token}`))
			.then((response) => {
				this.setState({
					validToken: true,
					fetch1: true,
					user: response.data
				});
			})
			.catch((error) => {
				this.setState({
					validToken: false
				});
			});
	}

	handleChangeSite(currentSite) {
		this.setState({
			currentPage: currentSite
		});
	}

	renderMain() {
		if (this.state.fetch1 && this.state.fetch2) {
			if (this.state.currentPage === 'creat') {
				return this.renderCreateLink();
			}
			if (this.state.currentPage === 'edit') {
				return this.renderEditLink();
			}
			return this.renderDashboard();
		}
		return <Loading />;
	}

	renderDashboard() {
		return (
			<div>
				<div className="bg">
					<div className="container">
						<div className="row">
							<div className="col-4">
								<Menu current={this.state.currentPage} changeSite={this.handleChangeSite} />
							</div>
							<div className="col-8">
								<Dashboard data={this.state.user} />
							</div>
						</div>
					</div>
				</div>
				<style jsx>{`
					.bg {
						width: 100vw;
						position: relative;
						left: 50%;
						right: 50%;
						margin-left: -50vw;
						margin-right: -50vw;
						background-color: #f5f4f4;
						margin-top: -2px;
						height: 100vh;
					}
				`}</style>
			</div>
		);
	}

	renderEditLink() {
		return (
			<div>
				<div className="bg">
					<div className="container">
						<div className="row">
							<div className="col-4">
								<Menu current={this.state.currentPage} changeSite={this.handleChangeSite} />
							</div>
							<div className="col-8">
								<p>Edit some links :)</p>
							</div>
						</div>
					</div>
				</div>
				<style jsx>{`
					.bg {
						width: 100vw;
						position: relative;
						left: 50%;
						right: 50%;
						margin-left: -50vw;
						margin-right: -50vw;
						background-color: #f5f4f4;
						margin-top: -2px;
						min-height: 100vh;
					}
				`}</style>
			</div>
		);
	}

	renderCreateLink() {
		return (
			<div>
				<div className="bg">
					<div className="container">
						<div className="row">
							<div className="col-4">
								<Menu current={this.state.currentPage} changeSite={this.handleChangeSite} />
							</div>
							<div className="col-8">
								<div className="margin" />
								{this.state.data.data.map((posts) => (
									<SimpleImage url={posts.images.standard_resolution.url} key={posts.id} />
								))}
							</div>
						</div>
					</div>
				</div>
				<style jsx>{`
					.margin {
						margin-top: 20px;
					}
					.bg {
						width: 100vw;
						position: relative;
						left: 50%;
						right: 50%;
						margin-left: -50vw;
						margin-right: -50vw;
						background-color: #f5f4f4;
						margin-top: -2px;
						min-height: 100vh;
					}
				`}</style>
			</div>
		);
	}

	renderErrorInToken() {
		return <div>There might be an error</div>;
	}

	render() {
		return this.state.validToken ? this.renderMain() : this.renderErrorInToken();
	}
}
