import react, { Component } from 'react';
import _JSXStyle from 'styled-jsx/style';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import AppdevTab from './AppdevTab';

class Appdev extends Component {
	render() {
		return (
			<Element name="test1" className="element">
				<div className="main">
					<div className="padding container">
						<h1 id="title">Application Development</h1>
						<div className="firstText">
							<div className="row topPadding">
								<div className="col-8 red">
									<AppdevTab />
								</div>
								<div className="col-4 blue phone">
									<img className="iphone" src="/static/images/black-mockup.png" />
								</div>
							</div>
						</div>
					</div>
					<style jsx>{`
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
						.firstText {
							line-height: 0;
						}

						.phone {
							text-align: center;
						}
						.red {
							background-color: red;
						}
						.blue {
							background-color: blue;
						}
						.main {
							line-height: 100vh;
							height: 100vh;
							background: #f3f3f3;
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

export default Appdev;
