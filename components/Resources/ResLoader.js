import React, { Component } from 'react';
import ResItem from './ResItem';
import axios from 'axios';
import getConfig from 'next/config';
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

export default class ResLoader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			res: [],
			loading: true,
			error: null
		};
	}

	componentDidMount() {
		this.fetch();
	}

	fetch() {
		axios
			.get(window.encodeURI(`${publicRuntimeConfig.localApi}/api/res`))
			.then((response) => {
				const res = response.data;
				if (res === null) {
					this.fetch();
					return;
				}
				this.setState({
					res,
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
				<img src="https://yalantis.com/uploads/ckeditor/pictures/365/content_Loading-Loop-1.gif" />
				<style jsx>{`
					.loader {
						text-align: center;
						height: 70vh;
						line-height: 70vh;
					}
					img {
						height: 200px;
					}
				`}</style>
			</div>
		);
	}

	renderError() {
		return (
			<div>
				<div>Sorry, an error ocurred</div>
			</div>
		);
	}

	renderResources() {
		const { error, res } = this.state;

		if (error) {
			//console.log(error);
			return this.renderError();
		}

		return (
			<div className="holder">
				{res.map((ress) => (
					<ResItem
						name={ress.resourceName}
						key={ress.resourceName}
						disc={ress.resourceDescription}
						link={ress.link}
					/>
				))}

				<style jsx>{`
					.holder {
						display: grid;
						grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
						grid-gap: 25px;
						grid-auto-flow: dense;
						list-style: none;
						margin: 1em auto;
						padding: 0;
						max-width: 80vw;
					}
				`}</style>
			</div>
		);
	}

	render() {
		return (
			<div>
				<div className="res">{this.state.loading ? this.renderLoading() : this.renderResources()}</div>
				<style jsx>{`
					.res {
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
