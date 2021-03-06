import React, { Component } from 'react';
import XRPItem from '../Xrp/CreatorItem';
import TextField from '@material-ui/core/TextField';
import Link from 'next/link';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import Snackbar from '@material-ui/core/Snackbar';

import getConfig from 'next/config';
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

export class Creator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			numberOfInputs: [ 0 ],
			finished: false,
			notRobot: false,
			isSnackOpen: false
		};
		this.handleCloseSnack = this.handleCloseSnack.bind(this);
		this.handleCaptcha = this.handleCaptcha.bind(this);
	}

	printArray = () => {
		if (this.state.notRobot) {
			console.clear();
			let id = this.makeid(10);
			let xrps = this.state;
			delete xrps['numberOfInputs'];
			delete xrps['finished'];
			delete xrps['notRobot'];
			delete xrps['isSnackOpen'];

			let result = {
				id: id,
				xrps: xrps
			};

			axios.post(publicRuntimeConfig.localApi + '/api/xrptrack', result);

			this.setState({
				siteId: id,
				finished: true
			});
		} else {
			this.setState({ isSnackOpen: true });
		}
	};

	handleCloseSnack() {
		this.setState({ isSnackOpen: false });
	}

	add = () => {
		this.setState((state) => {
			const list = state.numberOfInputs.push(state.numberOfInputs.length);

			return {};
		});
	};

	remove = () => {
		this.setState((state) => {
			const list = state.numberOfInputs.pop();

			return {};
		});
	};

	updateStates = (newState) => {
		this.setState({
			['items' + newState.iam]: newState
		});
	};

	makeid(length) {
		var result = '';
		var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		var charactersLength = characters.length;
		for (var i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	}

	handleCaptcha(value) {
		this.setState({
			notRobot: true
		});
	}

	renderCreater() {
		return (
			<div>
				<div className="holder">
					<div>
						<p>
							To create your custom XRP tracer enter an ID, then the amount bought, followed by the price
							of XRP at the purchase time, lastly enter the currency purchased with.
						</p>
					</div>
					{this.state.numberOfInputs.map((who) => (
						<XRPItem weChangeState={this.updateStates} key={who} iam={who} />
					))}

					<div className="buttondiv">
						<div className="adder left">
							<div onClick={this.add}>Add another buy</div>
						</div>
						<div className="adder right">
							<div onClick={this.remove}>Remove a buy</div>
						</div>
					</div>
				</div>
				<div className="captcha">
					<ReCAPTCHA sitekey="6LddwqgUAAAAAHhunVzMtBufLIIDWdHsbc-EmcEu" onChange={this.handleCaptcha} />
				</div>
				<div onClick={this.printArray} className="flat-button">
					Create Tracker
				</div>
				<Snackbar
					className="noRobots"
					key={`bottom,center`}
					open={this.state.isSnackOpen}
					onClose={this.handleCloseSnack}
					autoHideDuration={5000}
					ContentProps={{
						'aria-describedby': 'message-id'
					}}
					message={<span id="message-id">Please prove to me that you, in fact, are not a robot 🤖</span>}
				/>

				<style jsx>{`
					.noRobots {
						background-color: red;
					}
					.captcha {
						margin: 0 auto;
						width: 304px;
						margin-top: 100px;
					}
					.left {
						float: left;
					}
					.right {
						float: right;
					}
					.buttondiv {
						margin: 0 auto;
						width: 420px;
					}
					.adder {
						margin-top: 20px;
						background-color: #505b5f;
						text-align: center;
						width: 200px;
						color: #f4f4f4;
						padding: 10px;
						border-radius: 40px;
						cursor: pointer;
					}
					.holder {
						margin: 40px;
						background-color: #f7f7f7;
						padding: 30px;
						border-radius: 30px;
						text-align: center;
						padding-bottom: 50px;
					}
					button {
						padding: 20px;
						margin-bottom: 50px;
					}

					.spaceing {
						margin: 30px;
					}

					.currency {
						width: 30px;
						color: black;
					}

					.flat-button {
						border-radius: 3px;
						position: relative;
						width: 250px;
						height: 60px;
						background: #5fc4dd;
						margin: 0 auto;
						margin-top: 20px;
						margin-bottom: 50px;
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
					@media screen and (max-width: 600px) {
						.captcha {
							margin-top: 20px;
						}
						.adder {
							width: 150px;
							margin: 0 auto;
						}
						.left {
							float: none;
							margin-top: 10px;
							margin-bottom: 10px;
						}
						.right {
							float: none;
						}
						.buttondiv {
							width: auto;
						}
						.holder {
							margin: 0;
							padding: 20px 10px 20px 10px;
						}
					}
					@media (prefers-color-scheme: dark) {
						.holder {
							background-color: #232323;
							color: #909090;
						}
						.flat-button {
							background: #262729;
						}
						.flat-button:after {
							background: #2f3131;
						}
						table {
							color: #909090;
						}
					}
				`}</style>
			</div>
		);
	}
	renderDone() {
		return (
			<div className="holder">
				<img src="https://oak.is/uploads/animated-svg-ff.svg" />

				<div className="littlepad"> Your Tracker is created copy and save the link to return again:</div>

				<div className="linkbox">{`${publicRuntimeConfig.thisSite}/howsxrp?custom=` + this.state.siteId}</div>
				<Link href={'/howsxrp?custom=' + this.state.siteId}>
					<div className="flat-button">Continue</div>
				</Link>
				<style jsx>{`
					.littlepad {
						padding: 30px;
					}
					.linkbox {
						font-weight: 300;
						font-size: 1.4em;
						background-color: #f1f1f1;
						width: 60%;
						line-height: 75px;
						margin: 0 auto;
						margin-top: 10px;
						border-radius: 4px;
					}
					.linkbox:hover {
						background-color: #e1e7f1;
					}
					.holder {
						text-align: center;
						padding-top: 50px;
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
				<h1>Create a custom XRP Tracker</h1>
				{this.state.finished ? this.renderDone() : this.renderCreater()}
			</div>
		);
	}
}

export default Creator;
