import react, { Component } from 'react';
import _JSXStyle from 'styled-jsx/style';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class Webdev extends Component {
	render() {
		return (
			<Element name="webdev" className="element">
				<div className="main">
					<div className="padding container">
						<h1 id="title">Web Development</h1>
					</div>
					<style jsx>{`
						.main {
							line-height: 100vh;
							height: 100vh;
							background: #white;
							color: #333;
							width: 100vw;
							position: relative;
							margin-left: -50vw;
							left: 50%;
						}
						.padding {
							padding-top: 60px;
						}

						#title {
							text-align: center;
						}
					`}</style>
				</div>
			</Element>
		);
	}
}

export default Webdev;
