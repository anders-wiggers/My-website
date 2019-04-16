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
						<div className="row padding-fix">
							<div className="col-4">
								<i className="fab fa-node" />
							</div>
							<div className="col-8">
								<span>
									I have been developing on the web stack since I was 10. The last two years I've
									focused on full stack development. My interest in this started with an IoT course
									were we learned how to develop an API and back end with Express and Node.js and I've
									been using these tools ever since.
								</span>
							</div>
						</div>
						<div className="row padding-fix">
							<div className="col-8">
								<span>
									I have been developing on the web stack since I was 10. The last two years I've
									focused on full stack development. My interest in this started with an IoT course
									were we learned how to develop an API and back end with Express and Node.js and I've
									been using these tools ever since.
								</span>
							</div>
							<div className="col-4 ">
								<i className="fab fa-react" />
							</div>
						</div>
						<div className="row padding-fix">
							<div className="col-4 ">
								<i className="express">Express</i>
							</div>
							<div className="col-8">
								<span>
									I have been developing on the web stack since I was 10. The last two years I've
									focused on full stack development. My interest in this started with an IoT course
									were we learned how to develop an API and back end with Express and Node.js and I've
									been using these tools ever since.
								</span>
							</div>
						</div>
						<div className="row padding-fix">
							<div className="col-8">
								<span>
									I have been developing on the web stack since I was 10. The last two years I've
									focused on full stack development. My interest in this started with an IoT course
									were we learned how to develop an API and back end with Express and Node.js and I've
									been using these tools ever since.
								</span>
							</div>
							<div className="col-4 ">
								<i className="fas fa-database" />
							</div>
						</div>
					</div>
					<style jsx>{`
						.express {
							font: 4.5em helvetica neue, open sans, sans-serif;
							font-weight: 100;
							font-size: 80px;
						}
						.padding-fix {
							padding-top: 80px;
						}
						.main {
							min-height: 100vh;
							line-height: 100vh;
							background: #white;
							color: #333;
							width: 100vw;
							position: relative;
							margin-left: -50vw;
							left: 50%;
						}
						.padding {
							padding-top: 80px;
							line-height: 1;
						}

						.col-4 {
							font-size: 125px;
							text-align: center;
						}

						.col-8 {
							height: 125px;
							line-height: 125px;
						}

						span {
							display: inline-block;
							vertical-align: middle;
							line-height: 1.5;
						}
						#title {
							text-align: center;
						}

						.red {
							background-color: red;
						}
						.blue {
							background-color: blue;
						}
						p {
							line-height: 1.5;
						}
					`}</style>
				</div>
			</Element>
		);
	}
}

export default Webdev;
