import react, { Component } from 'react';
import _JSXStyle from 'styled-jsx/style';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

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
									I started using the React framework after a workshop were I learned about React
									Native for cross-platform mobile development. I found that the concept of the
									component-based layout system was fascinating to work with. And I've been using
									React for some time now.
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
									For backend work, I have been using Express as it is a light-weight web application
									framework to help organize my web application into an MVC architecture on the server
									side.
								</span>
							</div>
						</div>
						<div className="row padding-fix">
							<div className="col-8">
								<span>
									For database management, I've tried a lot of different solutions. This website uses
									Mongo DB as it was a system I've never tried before, however, i also have experience
									with MySQL and SQLite
								</span>
							</div>
							<div className="col-4 ">
								<i className="fas fa-database" />
							</div>
						</div>
					</div>
					<div className="padding container mobile">
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
							<div className="col-4 ">
								<i className="fab fa-react" />
							</div>
							<div className="col-8">
								<span>
									I started using the React framework after a workshop were I learned about React
									Native for cross-platform mobile development. I found that the concept of the
									component-based layout system was fascinating to work with. And I've been using
									React for some time now.
								</span>
							</div>
						</div>
						<div className="row padding-fix">
							<div className="col-4 ">
								<i className="express">Express</i>
							</div>
							<div className="col-8">
								<span>
									For backend work, I have been using Express as it is a light-weight web application
									framework to help organize my web application into an MVC architecture on the server
									side.
								</span>
							</div>
						</div>
						<div className="row padding-fix">
							<div className="col-4 ">
								<i className="fas fa-database" />
							</div>
							<div className="col-8">
								<span>
									For database management, I've tried a lot of different solutions. This website uses
									Mongo DB as it was a system I've never tried before, however, i also have experience
									with MySQL and SQLite
								</span>
							</div>
						</div>
					</div>
					<style jsx>{`
						.express {
							font: 4.5em helvetica neue, open sans, sans-serif;
							font-weight: 100;
							font-size: 80px;
						}
						.col-4 {
							overflow: hidden;
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
							padding-bottom: 80px;
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
						.mobile {
							display: none;
						}
						p {
							line-height: 1.5;
						}
						@media screen and (max-width: 600px) {
							.container {
								display: none;
							}
							.mobile {
								display: inline;
							}
							.express {
								font-size: 20vw;
							}
							.col-4 {
								max-width: 100%;
								flex: 100%;
							}
							.col-8 {
								max-width: 100%;
								height: auto;
								flex: 100%;
							}
							.padding-fix {
								padding-top: 40px;
							}
							.main {
								line-height: 1;
								padding: 20px;
							}
						}
						@media (prefers-color-scheme: dark) {
							.main {
								color: #909090;
							}
						}
					`}</style>
				</div>
			</Element>
		);
	}
}

export default Webdev;
