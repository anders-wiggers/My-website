import react, { Component } from 'react';
import { render } from 'react-dom';

class AppdevTab extends Component {
	constructor() {
		super();

		this.state = {
			and: true,
			rea: false,
			flu: false
		};
	}

	setAllFalse = () => {
		this.setState({
			and: false,
			rea: false,
			flu: false
		});
	};

	ShowHideTextComponentView = (lan) => {
		this.setAllFalse();
		if (lan === 'and') {
			this.setState({ and: true });
		}
		if (lan === 'rea') {
			this.setState({ rea: true });
		}
		if (lan === 'flu') {
			this.setState({ flu: true });
		}
	};

	render() {
		return (
			<div>
				<div className="tab">
					<button className="tablinks" onClick={() => this.ShowHideTextComponentView('and')}>
						Native Android
					</button>
					<button className="tablinks" onClick={() => this.ShowHideTextComponentView('rea')}>
						React Native
					</button>
					<button className="tablinks" onClick={() => this.ShowHideTextComponentView('flu')}>
						Flutter
					</button>
				</div>

				{this.state.and ? (
					<div>
						<h3>Native Android</h3>
						<p>London is the capital city of England.</p>
					</div>
				) : null}

				{this.state.rea ? (
					<div>
						<h3>React Native</h3>
						<p>Paris is the capital of France.</p>
					</div>
				) : null}

				{this.state.flu ? (
					<div>
						<h3>Flutter</h3>
						<p>Tokyo is the capital of Japan.</p>
					</div>
				) : null}
				<style jsx>{`
					.tab {
						overflow: hidden;
						border: 1px solid #ccc;
						background-color: #f1f1f1;
					}

					/* Style the buttons that are used to open the tab content */
					.tab button {
						background-color: inherit;
						float: left;
						border: none;
						outline: none;
						cursor: pointer;
						padding: 14px 16px;
						transition: 0.3s;
					}

					/* Change background color of buttons on hover */
					.tab button:hover {
						background-color: #ddd;
					}

					/* Create an active/current tablink class */
					.tab button.active {
						background-color: #ccc;
					}

					/* Style the tab content */
					.tabcontent {
						display: none;
						padding: 6px 12px;
						border: 1px solid #ccc;
						border-top: none;
					}
				`}</style>
			</div>
		);
	}
}

export default AppdevTab;
