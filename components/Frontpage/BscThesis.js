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
						<div id="text">
							<h4 id="title">Data Gathering Tool</h4>
							<div className="row">
								<div className="col-sm">
									<div className="alignMiddle">
										We approached the challenge of scraping webdata by developing a software layer
										on top of selenium that can be fed a set of instructions, interpret them, and
										execute the given commands. The advantage of this approach was maintainability.
										If a values changed, a new was added we did not need to go into the code and
										change it. We can simply change the instruction file to accommodate the new
										changes. Meaning that in future work we could develop more sophisticated
										detection software which outputs the instruction JSON file.
									</div>
								</div>
								<div className="col-sm">
									<div className="codebox">
										{`{
	"instructions": [
		{
			"get": "https://targetwebsite.com/api"
		},
		{
			"switch": "WebApplicationFrame"
		},
		{
			"wait": 2
		}
	]
}`}
									</div>
								</div>
							</div>
						</div>
						<div id="text">
							<h4 id="title">Visualization Tool</h4>
							<h5 id="title">Filtering Data</h5>
							<div className="row">
								<div className="col-4">
									<img className="img" src="static/images/fitlering.png" />
								</div>
								<div className="col-8">
									<video
										onloadedmetadata="this.muted = true"
										autoPlay
										loop
										muted
										playsInline
										className="vid"
									>
										<source src="/static/videos/filteringhd.mp4" type="video/mp4" />
										Your browser does not support the video tag.
									</video>
								</div>
							</div>
							<h5 id="title">Relating diffrend data points</h5>
							<div className="row">
								<div className="col-4">
									<img className="img" src="static/images/relation.png" />
								</div>
								<div className="col-8">
									<video
										onloadedmetadata="this.muted = true"
										autoPlay
										loop
										muted
										playsInline
										className="vid"
									>
										<source src="/static/videos/relation.mp4" type="video/mp4" />
										Your browser does not support the video tag.
									</video>
								</div>
							</div>
							<div>
								<p className="gitlink">
									The full project can be found at github:&nbsp;
									<a
										href="https://github.com/anders-wiggers/visualization-of-school-data/tree/master/visualization"
										target="_blank"
									>
										<i className="fab fa-github" /> Visualization Web Application
									</a>
								</p>
							</div>
						</div>
					</div>

					<style jsx>{`
						.codebox {
							padding: 20px;
							font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
							color: rgb(65, 49, 78);
							line-height: 1.6em;
							font-size: 12px;
							background: rgb(248, 247, 250);
							border: 1px solid rgb(241, 241, 244);
							box-shadow: none;
							white-space: pre;
							overflow-wrap: normal;
							overflow-x: auto;
							margin: 20px;
						}
						.gitlink {
							text-align: center;
						}
						.img {
							width: 100%;
						}
						.vid {
							width: 100%;
						}
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
						.alignMiddle {
							display: flex;
							justify-content: center;
							align-items: center;
							height: 100%;
						}
						.col-4 {
							overflow: hidden;
							display: flex;
							justify-content: center;
							align-items: center;
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
