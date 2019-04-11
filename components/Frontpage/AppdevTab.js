import react, { Component } from 'react';
import { render } from 'react-dom';
import { Motion, spring } from 'react-motion';

class AppdevTab extends Component {
	constructor(props) {
		super(props);

		this.state = {
			and: true,
			rea: false,
			flu: false,
			cpos: 0
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
			this.setState({
				and: true,
				cpos: 0
			});
			this.props.onSelectLanguage('android');
		}
		if (lan === 'rea') {
			this.setState({
				rea: true,
				cpos: 170
			});
			this.props.onSelectLanguage('react');
		}
		if (lan === 'flu') {
			this.setState({
				flu: true,
				cpos: 170 * 2
			});
			this.props.onSelectLanguage('flutter');
		}
	};

	render() {
		return (
			<div>
				<div className="tab">
					<button className="tablinks" onClick={() => this.ShowHideTextComponentView('and', '370')}>
						<i className="fab fa-android" /> Native Android
					</button>
					<button className="tablinks" onClick={() => this.ShowHideTextComponentView('rea', '370')}>
						<i className="fab fa-react" /> React Native
					</button>
					<button className="tablinks" onClick={() => this.ShowHideTextComponentView('flu', '370')}>
						<i className="fab fa-react" /> Flutter
					</button>
				</div>

				<Motion style={{ x: spring(this.state.cpos) }}>
					{({ x }) => (
						// children is a callback which should accept the current value of
						// `style`
						<div className="demo0">
							<div
								className="demo0-block"
								style={{
									WebkitTransform: `translate3d(${x}px, 0, 0)`,
									transform: `translate3d(${x}px, 0, 0)`
								}}
							/>
						</div>
					)}
				</Motion>

				{this.state.and ? (
					<div className="content">
						<h3>Native Android</h3>
						<p>London is the capital city of England.</p>
					</div>
				) : null}

				{this.state.rea ? (
					<div className="content">
						<h3>React Native</h3>
						<p>Paris is the capital of France.</p>
					</div>
				) : null}

				{this.state.flu ? (
					<div className="content">
						<h3>Flutter</h3>
						<p>Tokyo is the capital of Japan.</p>
					</div>
				) : null}
				<style jsx>{`
					.content {
						padding-top: 30px;
					}

					p {
						padding-top: 10px;
					}
					.demo0 {
						border-radius: 4px;
						position: relative;
						margin: 0 auto;
						width: 510px;
						height: 3px;
					}
					.demo0-block {
						position: absolute;
						width: 170px;
						height: 3px;
						border-radius: 4px;
						background-color: rgb(130, 181, 198);
					}
					.tab {
						display: flex;
						align-items: center;
						justify-content: center;
					}

					/* Style the buttons that are used to open the tab content */
					.tab button {
						width: 170px;
						background-color: inherit;
						float: left;
						border: none;
						outline: none;
						cursor: pointer;
						padding: 14px 16px;
						transition: 0.3s;
						border-radius: 3px;
					}

					/* Change background color of buttons on hover */
					.tab button:hover {
						background-color: #ddd;
					}

					/* Create an active/current tablink class */
					.tab button.active {
						background-color: #ccc;
					}
				`}</style>
			</div>
		);
	}
}

export default AppdevTab;
