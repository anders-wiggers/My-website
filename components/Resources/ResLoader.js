import React, { Component } from 'react';
import ResItem from './ResItem';
import axios from 'axios';

export class ResLoader extends Component {
	constructor(props) {
		super(props);

		this.state = {
			res: [],
			loading: true,
			error: null
		};
	}

	componentDidMount() {
		axios
			.get(window.encodeURI(`http://localhost:3001/api/res`))
			.then((response) => {
				const res = response.data;
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

	renderResources() {
		const { res } = this.state;

		return (
			<div className="holder">
				{res.map((res) => <ResItem name={res.resourceName} disc={res.resourceDescription} link={res.link} />)}

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

export default ResLoader;
