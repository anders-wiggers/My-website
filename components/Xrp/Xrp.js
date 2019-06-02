import React, { Component } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default class Xrp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			xrp: [],
			loading: true,
			error: null,
			currentClass: '',
			latestRead: ''
		};
	}

	intervalID = 0;
	componentDidMount() {
		this.fetchData();
		this.intervalID = setInterval(() => {
			console.log('fetching');
			this.setState({
				currentClass: ''
			});
			axios
				.get(window.encodeURI(`https://www.bitstamp.net/api/v2/ticker/xrpeur/`))
				.then((response) => {
					const xrp = response.data;
					if (xrp.last < this.state.latestRead) {
						this.setState({
							xrp,
							loading: false,
							currentClass: 'dive',
							latestRead: xrp.last
						});
					} else if (xrp.last > this.state.latestRead) {
						this.setState({
							xrp,
							loading: false,
							currentClass: 'rise',
							latestRead: xrp.last
						});
					} else if (xrp.last === this.state.latestRead) {
						this.setState({
							xrp,
							loading: false,
							currentClass: ''
						});
					}
				})
				.catch((error) => {
					this.setState({
						error: error,
						loading: false
					});
				});
		}, 5000);
	}

	componentWillUnmount() {
		clearInterval(this.intervalID);
	}

	fetchData() {
		console.log('fetching');
		axios
			.get(window.encodeURI(`https://www.bitstamp.net/api/v2/ticker/xrpeur/`))
			.then((response) => {
				const xrp = response.data;
				this.setState({
					xrp,
					loading: false
				});
			})
			.catch((error) => {
				setTimeout(function() {}, 100);
				this.fetchData();
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

	renderList() {
		const { error, xrp } = this.state;

		return (
			<div className="smallCon">
				<h1 className="xrp">
					XRP is at: <span className={this.state.currentClass + ' boxed'}>{xrp.last}</span>
				</h1>
				<div>
					<table className="table table-striped">
						<thead>
							<tr>
								<td />
								<th scope="col">Profit</th>
								<th scope="col">Total</th>
							</tr>
						</thead>
						<tr>
							<th scope="row">Current Result: </th>
							<td>{(xrp.last * 1934.55 * 7.47 - 870 * 7.47).toFixed(2)}</td>
							<td>{(xrp.last * 1934.55 * 7.47).toFixed(2)}</td>
						</tr>

						<tr>
							<th scope="row">First Buy:</th>
							<td>{((xrp.last * 661.3 - 661.3 * 0.5) * 7.47).toFixed(2)}</td>
							<td>{(xrp.last * 661.3 * 7.47).toFixed(2)}</td>
						</tr>
						<tr>
							<th scope="row">Secound Buy:</th>
							<td>{((xrp.last * 999 - 999 * 0.39) * 7.47).toFixed(2)}</td>
							<td>{(xrp.last * 999 * 7.47).toFixed(2)}</td>
						</tr>
						<tr>
							<th scope="row">GF Stats:</th>
							<td>{((xrp.last * 274 - 274 * 0.5) * 7.47).toFixed(2)}</td>
							<td>{(xrp.last * 274 * 7.47).toFixed(2)}</td>
						</tr>
					</table>
					<div className="center">
						<Link href="/howsxrp/custom">
							<div className="flat-button">Create your own</div>
						</Link>
					</div>
				</div>

				<style jsx>{`
					.center {
						text-align: center;
					}
					.islow {
						background-color: #f8d7da;
					}

					.ishigh {
						background-color: #d4edda;
					}

					.boxed {
						padding: 10px;
						border-radius: 10px;
					}
					.xrp {
						font-weight: 200;
						font-size: 4em;
						text-align: center;
						padding-bottom: 1em;
						-webkit-font-smoothing: antialiased;
						-moz-osx-font-smoothing: grayscale;
					}

					.dive {
						-webkit-animation-name: dive; /* Safari 4.0 - 8.0 */
						-webkit-animation-duration: 1s; /* Safari 4.0 - 8.0 */
						animation-name: dive;
						animation-duration: 1s;
					}

					.rise {
						-webkit-animation-name: rise; /* Safari 4.0 - 8.0 */
						-webkit-animation-duration: 1s; /* Safari 4.0 - 8.0 */
						animation-name: rise;
						animation-duration: 1s;
					}
					.smallCon {
						display: table-cell;
						vertical-align: middle;
					}

					/* Safari 4.0 - 8.0 */
					@-webkit-keyframes dive {
						0% {
							background-color: transparent;
						}
						10% {
							background-color: #f95858;
						}
						100% {
							background-color: transparent;
						}
					}

					/* Standard syntax */
					@keyframes dive {
						0% {
							background-color: transparent;
						}
						10% {
							background-color: #f95858;
						}
						100% {
							background-color: transparent;
						}
					}

					/* Safari 4.0 - 8.0 */
					@-webkit-keyframes rise {
						0% {
							background-color: transparent;
						}
						10% {
							background-color: #97efac;
						}
						100% {
							background-color: transparent;
						}
					}

					/* Standard syntax */
					@keyframes rise {
						0% {
							background-color: transparent;
						}
						10% {
							background-color: #97efac;
						}
						100% {
							background-color: transparent;
						}
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
						background: #5fc4dd;
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
						background: #31a8c5;
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
