import React, { Component } from 'react';
import axios from 'axios';

const Repo = ({ repo }) => (
	<tr>
		<td className="repo-name">
			<a href={repo.html_url} target="_blank">
				{repo.name}
			</a>
		</td>
		<td>{repo.language}</td>
		<td>{repo.size} kb</td>
		<td>{repo.stargazers_count} Stars</td>
		<style jsx>{`
			a {
				color: #364350;
			}
			@media (prefers-color-scheme: dark) {
				a {
					color: #909090;
				}
			}
		`}</style>
	</tr>
);

const MobileRepo = ({ repo }) => (
	<div className="contain">
		<h5>
			<a href={repo.html_url} target="_blank">
				{repo.name}
			</a>
		</h5>
		<div>Language: {repo.language}</div>
		<div>Size: {repo.size} kb</div>
		<div>{repo.stargazers_count} Stars</div>
		<style jsx>{`
			a {
				color: #364350;
			}
			.contain {
				padding: 10px;
				background: #f7f7f7;
				margin: 10px;
				overflow: hidden;
				display: none;
			}
			@media screen and (max-width: 600px) {
				.contain {
					display: block;
				}
			}
			@media (prefers-color-scheme: dark) {
				a {
					color: #909090;
				}
				.contain {
					background-color: #262729;
					color: #909090;
				}
			}
		`}</style>
	</div>
);

export default class GitHubRepos extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			repos: [],
			loading: true,
			error: null
		};
	}

	componentDidMount() {
		axios
			.get(window.encodeURI(`https://api.github.com/users/` + this.props.name + `/repos`))
			.then((response) => {
				const repos = response.data;
				this.setState({
					repos,
					loading: false
				});
			})
			.catch((error) => {
				this.setState({
					error: error,
					loading: false
				});
			});
	}

	renderLoading() {
		return (
			<div className="loader">
				<img src="https://media1.tenor.com/images/893ee126100411e582efc88f6a63996c/tenor.gif" />
				<style jsx>{`
					.loader {
						text-align: center;
						height: 70vh;
						line-height: 70vh;
					}
					img {
						height: 50px;
					}
				`}</style>
			</div>
		);
	}

	renderError() {
		return (
			<div>
				<div>Sorry, an error ocurred: {this.state.error.response.data.message}</div>
			</div>
		);
	}

	renderList() {
		const { error, repos } = this.state;

		if (error) {
			console.log(error);
			return this.renderError();
		}

		return (
			<div className="smallCon">
				<h3>My Software Repository</h3>
				<table className="table table-striped">
					<thead>
						<tr>
							<th>Repository Name</th>
							<th>Language</th>
							<th>Size</th>
							<th>Stars Count</th>
						</tr>
					</thead>
					<tbody>{repos.map((repo) => <Repo repo={repo} key={repo.id} />)}</tbody>
				</table>
				{repos.map((repo) => <MobileRepo repo={repo} key={repo.id} />)}
				<style jsx>{`
					h3 {
						padding-bottom: 20px;
					}
					.smallCon {
						display: table-cell;
						vertical-align: middle;
					}
					@media screen and (max-width: 600px) {
						.table {
							display: none;
						}
					}
					@media (prefers-color-scheme: dark) {
						table {
							color: #909090;
							border-color: ;
						}
					}
				`}</style>
			</div>
		);
	}

	render() {
		return (
			<div>
				<div className="reps">{this.state.loading ? this.renderLoading() : this.renderList()}</div>
				<style jsx>{`
					.reps {
						table-layout: fixed;
						width: 100%;
						display: table;
						height: 86vh;
					}
				`}</style>
			</div>
		);
	}
}
