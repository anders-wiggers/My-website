import React, { Component } from 'react';
import XRPItem from '../Xrp/CreatorItem';
import TextField from '@material-ui/core/TextField';
import Link from 'next/link';

export class Creator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			numberOfInputs: [ 0 ],
			finished: false
		};
	}

	printArray = () => {
		console.clear();
		let id = this.makeid(10);
		let xrps = this.state;
		delete xrps['numberOfInputs'];
		delete xrps['finished'];

		let result = {
			id: id,
			xrps: xrps
		};

		this.setState({
			siteId: id,
			finished: true
		});

		result = JSON.parse(JSON.stringify(result));
		console.log(result);
	};

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

	renderCreater() {
		return (
			<div>
				{this.state.numberOfInputs.map((who) => <XRPItem weChangeState={this.updateStates} iam={who} />)}

				<div onClick={this.add}>Add another buy</div>

				<div onClick={this.remove}>Remove a buy</div>

				<div onClick={this.printArray} className="flat-button">
					Create Tracker
				</div>

				<style jsx>{`
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
	renderDone() {
		return (
			<div className="holder">
				<img src="https://oak.is/uploads/animated-svg-ff.svg" />

				<div className="littlepad"> Your Tracker is created copy and save the link to return again:</div>

				<div className="linkbox">http://localhost:3000/howsxrp?custom={this.state.siteId}</div>
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
						height: 75px;
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
