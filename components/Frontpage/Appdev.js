import react, { Component } from 'react';
import _JSXStyle from 'styled-jsx/style';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import AppdevTab from './AppdevTab';
import { Motion, spring } from 'react-motion';

class Appdev extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lang: 'android',
			pushed: 0
		};
	}

	handleLanguage = (langValue) => {
		if (langValue === 'android') {
			this.setState({
				pushed: 0
			});
		}

		if (langValue === 'react') {
			this.setState({
				pushed: 28
			});
		}

		if (langValue === 'flutter') {
			this.setState({
				pushed: 56
			});
		}

		this.setState({ lang: langValue });
	};

	render() {
		return (
			<Element name="test1" className="element">
				<div className="main">
					<div className="padding container">
						<h1 id="title">Application Development</h1>
						<div className="firstText">
							<div className="row topPadding">
								<div className="col-8 ">
									<AppdevTab onSelectLanguage={this.handleLanguage} />
								</div>
								<div className="col-4  phone">
									<div className="iphone-bg">
										<Motion style={{ x: spring(this.state.pushed) }}>
											{({ x }) => (
												// children is a callback which should accept the current value of
												// `style`
												<div
													className="moveAble"
													style={{
														WebkitTransform: `translate3d(-${x}vh, 0, 0)`,
														transform: `translate3d(-${x}vh, 0, 0)`
													}}
												>
													<div className="onphone">
														<p>
															{'private Dev dev;'}
															<br />
															<br />
															{'void onCreate(Bundle icicle) {'}
															<br />
															&nbsp; &nbsp;{'super.onCreate(icicle);'}
															<br />
															&nbsp; &nbsp;{'dev = new Dev(22);'}
															<br />
															&nbsp; &nbsp;{'Creator = dev.getCreator;'}
															<br />
															{'}'}
															<br />
															<br />
															{'void onDestroy()'}
															<br />
															{'{'}
															<br />
															&nbsp; &nbsp;{'super.onDestroy();'}
															<br />
															&nbsp; &nbsp;{'dev.putBoolean("gpsOn");'}
															<br />
															&nbsp; &nbsp;{'Creator = dev.getCreator;'}
															<br />
															{'}'}
														</p>
													</div>
													<div className="onphone">
														<p>
															{'class Component extends Component {'}
															<br />
															&nbsp;{'constructor(props) {'}
															<br />
															&nbsp; &nbsp;{'super(props);'}
															<br />
															&nbsp; &nbsp;{'this.state = {'}
															<br />
															&nbsp; &nbsp; &nbsp;{'lang: "Eng",'}
															<br />
															&nbsp; &nbsp; &nbsp;{'pushed: 0'}
															<br />
															&nbsp; &nbsp;{'}'}
															<br />
															&nbsp;{'}'}
															<br />
															<br />
															&nbsp;{'render() {'}
															<br />
															&nbsp;&nbsp;{'<Text>Press me</Text>'}
															<br />
															&nbsp;{'}'}
															<br />
															{'}'}
															<br />
														</p>
													</div>
													<div className="onphone">
														<p>
															{'class MyHome extends StatelessWidget {'}
															<br />
															&nbsp;{'MyHomePage({this.title})'}
															<br />
															<br />
															&nbsp;{'@overrite'}
															<br />
															&nbsp;{'Widget build(){'}
															<br />
															&nbsp;&nbsp;{'return new Scaffold('}
															<br />
															&nbsp;&nbsp;{'appBar: new AppBar('}
															<br />
															&nbsp;&nbsp;&nbsp;{'tittle:new Text("dev"),'}
															<br />
															&nbsp;&nbsp;{'),'}
															<br />
															&nbsp;{')'}
															<br />
															{'}'}
															<br />
														</p>
													</div>
												</div>
											)}
										</Motion>
									</div>
									<div
										id="ontop"
										style={{
											WebkitTransform: `translate3d(0px, 0, 0)`
										}}
									>
										<img className="iphone" src="/static/images/black-mockup.png" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<style jsx>{`
						.onphone {
							width: 28vh;
							display: table-cell;
							color: white;
							padding-left: 15px;
							padding-right: 15px;
						}
						#ontop {
							z-index: 2;
							margin: -60vh auto;
						}
						.liste {
							list-style: none;
							flex-direction: row;
							display: flex;
							background-color: pink;
						}
						.topPadding {
							padding-top: 10vh;
						}
						.iphone {
							height: 60vh;
						}
						.moveAble {
							height: 60vh;
							background-color: #a4cc44;
							width: 84vh;
							background: #92d600;
							background: -moz-linear-gradient(
								left,
								#92d600 0%,
								#00cea5 27%,
								#00b7ea 56%,
								#009eed 78%,
								#4790c1 100%
							);
							background: -webkit-linear-gradient(
								left,
								#92d600 0%,
								#00cea5 27%,
								#00b7ea 56%,
								#009eed 78%,
								#4790c1 100%
							);
							background: linear-gradient(
								to right,
								#92d600 0%,
								#00cea5 27%,
								#00b7ea 56%,
								#009eed 78%,
								#4790c1 100%
							);
							filter: progid:DXImageTransform.Microsoft.gradient(
									startColorstr='#92d600',
									endColorstr='#4790c1',
									GradientType=1
								);
						}
						.iphone-bg {
							padding-left: 5px;
							overflow: hidden;
							height: 60vh;
							width: 28vh;
							margin: 0 auto;
							font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
							border-radius: 50px;
							-webkit-border-radius: 50px;
							-moz-border-radius: 50px;
							-webkit-mask-image: -webkit-radial-gradient(white, black);
						}
						.firstText {
							line-height: 0;
						}
						.phone {
							text-align: center;
						}
						.main {
							line-height: 100vh;
							height: 100vh;
							min-height: 800px;
							background: #f3f3f3;
							color: #333;
							width: 100vw;
							position: relative;
							margin-left: -50vw;
							left: 50%;
						}
						.padding {
							padding-top: 80px;
						}
						#title {
							text-align: center;
						}
						p {
							padding-top: 50px;
							line-height: 3vh;
							text-align: left;
						}
					`}</style>
				</div>
			</Element>
		);
	}
}

export default Appdev;
