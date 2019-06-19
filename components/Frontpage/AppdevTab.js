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
				cpos: 150
			});
			this.props.onSelectLanguage('react');
		}
		if (lan === 'flu') {
			this.setState({
				flu: true,
				cpos: 150 * 2
			});
			this.props.onSelectLanguage('flutter');
		}
	};

	render() {
		return (
			<div>
				<div className="tab">
					<button className="tablinks" onClick={() => this.ShowHideTextComponentView('and', '370')}>
						<i className="fab fa-android" />
						<br /> Android
					</button>
					<button className="tablinks" onClick={() => this.ShowHideTextComponentView('rea', '370')}>
						<i className="fab fa-react" />
						<br /> React Native
					</button>
					<button className="tablinks" onClick={() => this.ShowHideTextComponentView('flu', '370')}>
						<i className="fab fa-react" />
						<br /> Flutter
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
						<h3>Android</h3>
						<p>
							I've have been developing androids apps for 2 years now. My first project was BuzzMate which
							was an application for the visually impaired, the app assisted with bus trips.{' '}
						</p>

						<p>
							The next application I develop was MyPolitician. MyPolitician is a tinder like approach to
							finding a politician to vote for. The main focus was to develop a Good User experience
						</p>
						<p className="gitlink">
							<a href="https://github.com/anders-wiggers/My-Politician" target="_blank">
								<i className="fab fa-github" /> My Politician
							</a>
						</p>
						<p>
							I've also develop a Game called Primite, which is a simple clicker game where the player
							gathers strength and loot over time. The main focus of the development was to use as many
							programming patterns as possible.
						</p>
						<p className="gitlink">
							<a href="https://github.com/anders-wiggers/Primite">
								<i className="fab fa-github" /> Primite
							</a>
						</p>
					</div>
				) : null}

				{this.state.rea ? (
					<div className="content">
						<h3>React Native</h3>
						<p>
							React Native is a framework for building a cross-platform mobile application. The
							programming langue is Javascript and is really close to the syntax used for React JS which
							is the framework this website is built on.
						</p>

						<p>
							I have created a few applications using React Native, none of these apps are available on
							GitHub however, as they have been developed for schoolwork and for private use only.
						</p>
					</div>
				) : null}

				{this.state.flu ? (
					<div className="content">
						<h3>Flutter</h3>
						<p>
							Flutter is a newly release framework to develop a cross-platform application. I've just
							started tinkering with different syntax and all the different possibilities.{' '}
						</p>

						<p>
							Flutter is created by Google and uses the Dart language, which i've never used before.
							However, the syntax is like Java and a bit of Javascript which I'm really familiar with.{' '}
						</p>

						<p>
							I don't have any project created in a flutter to share at this time, but check back later as
							there is a project in the pipeline, which I think is going to be really cool
						</p>
					</div>
				) : null}
				<style jsx>{`
					.gitlink {
						text-align: center;
						padding-bottom: 20px;
					}

					a {
						color: #6aa014;
					}
					.content {
						padding-top: 30px;
					}

					p {
						padding-top: 10px;
						line-height: 1.5;
					}
					.demo0 {
						border-radius: 4px;
						position: relative;
						margin: 0 auto;
						width: 450px;
						height: 3px;
					}
					.demo0-block {
						position: absolute;
						width: 150px;
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
						width: 150px;
						background-color: inherit;
						line-height: 1.5;
						float: left;
						border: none;
						outline: none;
						cursor: pointer;
						padding: 14px 16px;
						transition: 0.3s;
						border-radius: 4px 4px 0px 0px;
					}

					/* Change background color of buttons on hover */
					.tab button:hover {
						background-color: #ddd;
					}

					/* Create an active/current tablink class */
					.tab button.active {
						background-color: #ccc;
					}
					@media screen and (max-width: 600px) {
						.tab button {
							line-height: 1;
						}
						.demo0 {
							display: none;
						}
						.main {
							height: auto;
						}
					}
				`}</style>
			</div>
		);
	}
}

export default AppdevTab;
