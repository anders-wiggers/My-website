import react, { Component } from 'react';
import _JSXStyle from 'styled-jsx/style';
import Typed from 'react-typed';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class Entry extends Component {
	render() {
		return (
			<div id="fiesta" className="fiesta">
				<div id="typed">
					<Typed
						strings={[
							'Hey! my name is Anders 👏',
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
				</div>

				<style jsx>{`
					.goto {
						cursor: pointer;
						margin: 0 auto;
						width: 10vw;
					}
					.goto:hover {
						color: black;
					}
					#typed {
						color: #333;
						background-color: #white;
						height: 100vh;
						width: 100vw;
						font-size: 2.5em;
						text-align: center;
						line-height: 80vh;
						position: relative;
						margin-left: -50vw;
						left: 50%;
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
				`}</style>
			</div>
		);
	}
}

export default Entry;
