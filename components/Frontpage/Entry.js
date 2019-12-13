import react, { Component } from 'react';
import _JSXStyle from 'styled-jsx/style';
import Typed from 'react-typed';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class Entry extends Component {
	render() {
		return (
			<div id="fiesta" className="fiesta">
				<div id="typed">
					<img className="me" src="/static/images/anders-wiggers.jpg" />
					<div className="textbox">
						<Link
							activeClass="active"
							to="test1"
							spy={true}
							smooth={true}
							offset={0}
							duration={1000}
							onSetActive={this.handleSetActive}
						>
							<div className="goto">
								<h5>See more </h5>
								<h3>
									<span className="fa fa-sort-down" />
								</h3>
							</div>
						</Link>
						<div className="typeText">
							<Typed
								strings={[
									'Hey! my name is Anders',
									'I develop Applications',
									'I develop Websites',
									'And much more!',
									'You can take a look at my portfolio or contact me!'
								]}
								typeSpeed={80}
								backSpeed={40}
								loop={true}
								smartBackspace={true}
							/>
						</div>
					</div>
				</div>

				<style jsx>{`
					.textbox {
						border-radius: 20px;
						position: relative;
						z-index: 2;
						max-width: 900px;
						margin: 0 auto;
						margin-top: 2vh;
					}
					.fiesta {
						min-height: calc(100vh - 60px);
					}
					.me {
						width: 50vw;
						max-width: 400px;
						border-radius: 10000px;
						z-index: 0;
						margin-top: 10vh;
						position: relative;
					}
					.typeText {
						position: relative;
						z-index: 1;
						margin-top: calc(-90vh + 400px + 60px + 65px);
					}
					.goto {
						cursor: pointer;
						width: 100%;
						z-index: 2;
						position: relative;
						margin: 0 auto;
						margin-top: calc(90vh - 400px - 60px - 65px - 50px);
					}
					.goto:hover {
						color: black;
					}
					#typed {
						color: #333;
						z-index: 1;
						position: relative;
						background-color: #white;
						font-size: 2.5em;
						text-align: center;
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
