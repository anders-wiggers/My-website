import react, { Component } from 'react';
import _JSXStyle from 'styled-jsx/style';
import Typed from 'react-typed';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class Entry extends Component {
	render() {
		return (
			<div id="fiesta" className="fiesta">
				<div id="typed">
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
					<div className="textbox">
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
					<img className="me" src="/static/images/anders-wiggers.jpg" />
				</div>

				<style jsx>{`
					.textbox {
						background: #292c2f;
						padding: 20px;
						border-radius: 20px;
						position: relative;
						z-index: 2;
						max-width: 900px;
						margin: 0 auto;
					}
					.fiesta {
						height: calc(100vh - 60px);
					}
					.me {
						width: 50vw;
						max-width: 400px;
						margin-top: -50vh;
						margin-left: -40vw;
						border-radius: 10000px;
						z-index: 0;
						position: relative;
					}
					.goto {
						cursor: pointer;
						width: 100%;
						z-index: 1;
						margin-top: 40vh;
						position: absolute;
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
						margin-top: calc(50vh - 2.5em);
					}
					@media screen and (max-width: 600px) {
						#typed {
							padding-top: 32vh;
							line-height: 1;
						}
						.goto {
							padding-top: 30vh;
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
