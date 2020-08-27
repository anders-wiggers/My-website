import react, { Component } from 'react';
import _JSXStyle from 'styled-jsx/style';
import { Motion, spring, presets } from 'react-motion';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class Entry extends Component {
	render() {
		return (
			<div id="fiesta" className="fiesta">
				<div className="container">
					<div className="row">
						<div className="col-8">
							<div id="bg1" />

							<div id="bg2" />
							<div id="infobox">
								<h1>Welcome to my personal portfolio</h1>
								<p>I do:</p>
								<ul>
									<li>Application Development</li>
									<li>Web Development</li>
									<li>Product development</li>
									<li>Teaching Experience</li>
									<li>Bachelors thesis</li>
								</ul>
								<p>Click above to see more</p>
							</div>
						</div>
						<div className="col-4">
							<div id="me">
								<img className="me" src="/static/images/anders-wiggers.jpg" />
							</div>
						</div>
					</div>
				</div>
				<style jsx>{`
					.container {
						margin-top:10vh;
					}
					#infobox {
						height: 400px;
						width: 600px;
						border-radius: 40px;
						padding: 30px;
						margin-top:-440px;
						color:white;
						background: rgb(177,57,94);
						background: linear-gradient(164deg, rgba(177,57,94,1) 0%, rgba(127,54,181,1) 34%, rgba(66,117,168,1) 67%, rgba(58,152,160,1) 100%);
						transform:translateY(0px)
					}
					#bg1 {
						height: 400px;
						width: 600px;
						margin-left: -30px;
						background-color: #402631;
						border-radius: 70px;
						animation: ani2 20s 2s infinite;

					}
					#bg2 {
						height: 400px;
						width: 600px;
						margin-left: 40px;
						margin-top:-330px;
						background-color: #1D323C;
						border-radius: 60px;
						animation: ani1 20s 0s infinite;
						animation-timing-function: ease-in-out;
					}

					@keyframes ani1 {
						0% { transform:translateY(0px);  }
						25% { transform:translatex(-25px); }
						50% { transform:translateY(-50px); }
						75% { transform:translatex(0px); }
						100% { transform:translateY(0px);  }
					}
					@keyframes ani2 {
						0% { transform:translateY(0px);  }
						25% { transform:translatex(25px); }
						50% { transform:translateY(50px); }
						75% { transform:translatex(0px); }
						100% { transform:translateY(0px);  }
					}
					.fiesta {
						min-height: calc(100vh - 60px);
					}
					
					.me {
						width: 20vw;
						max-width: 400px;
						border-radius: 10000px;
						z-index: 0;
						margin-top: 10vh;
						position: relative;
					}
					
					}
					@media screen and (max-width: 600px) {
						.goto {
							margin-top: calc(90vh - 50vw - 60px - 65px - 50px);
						}
						.typeText {
							margin-top: calc(-90vh + 50vw + 60px + 65px);
						}
					}
					@media (prefers-color-scheme: dark) {
						.goto:hover {
							color: white;
						}
						#typed {
							color: #909090;
						}
					}
				`}</style>
			</div>
		);
	}
}

export default Entry;
