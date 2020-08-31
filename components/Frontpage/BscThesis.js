import react, { Component } from 'react';
import _JSXStyle from 'styled-jsx/style';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class Webdev extends Component {
	render() {
		return (
			<Element name="bsc" className="element">
				<div className="main">
					<div className="padding container">
						<h1 id="title">Bachelor Thesis </h1>
						<h2 id="title">Web-based Visualization for Exploring Public School Data</h2>
						<div id="text">
							<h4 id="title">Summery</h4>
							<span>
								The bachelor thesis, in abstract terms, tackles the problem of gathering a large dataset
								online, processing it, and presenting the data to a large user-group. In more a concrete
								context we gathered the data available on public schools in Denmark, processed the data,
								and created a web-based visualization tool that allows users to search and filter
								differed schools. The bachelor thesis was written with{' '}
								<a href="https://www.linkedin.com/in/aron-baldvinsson-48a3a818b/" target="_blank">
									Aron
								</a>{' '}
								and{' '}
								<a href="https://www.linkedin.com/in/alex-krogh-smythe/" target="_blank">
									Alex
								</a>{' '}
								and supervised by Hans-Jörg
							</span>
						</div>
						<div id="text">
							<h4 id="title">Abstract</h4>
							<span>
								The Danish government encourages all public schools in Denmark to provide as many
								statistics as possible to The Danish Ministry of Education and Research to store,
								analyze, and publish on uddannelsesstatistik.dk. Navigating the aforementioned website
								and exploring the data provided is a labor-intensive and a non-user-friendly task. The
								data is spread across multiple sites and difficult to work with. By identifying the
								users' requirements in the context of searching for information on public school data,
								we discovered a demand for a platform that allows users to easily navigate and explore
								such data. In the process of conceptualizing such an application, we found the
								literature insufficient in terms of presenting a general solution to visualize
								heterogeneous data sets to a broad user group. From this we formulated our hypothesis:
								Can we solve to the challenge of visualizing heterogeneous data sets to a broad user
								group by developing and implementing a framework that generalizes a solution the
								challenge. This resulted in the creation of the DEEVA Framework, that aims to support
								developers in the process of building visualization applications. To confirm or disprove
								the hypothesis, we created an application with a user-friendly interface that
								facilitates data exploration with a focus on the iterative process. Results from the
								evaluation confirmed our hypothesis. However further iterations of the framework are
								needed to fully realize its potential.
							</span>
						</div>
					</div>

					<style jsx>{`
						#text {
							padding-top: 80px;
							line-height: 1.5;
							text-align: left;
						}
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
