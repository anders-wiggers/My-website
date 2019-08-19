import React, { Component } from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

export default class OtherMeans extends Component {
	render() {
		return (
			<Element name="other">
				<div className="otherContainer">
					<div className="social">
						<h3>
							<a href="https://www.instagram.com/saintwiggers/" target="_blanc">
								<i className="fab fa-instagram" /> I have a sweet instagram
							</a>
						</h3>
						<h3>
							<a href="https://www.facebook.com/anders.wiggers" target="_blanc">
								<i className="fab fa-facebook-square" /> Howbout' facebook?
							</a>
						</h3>
						<h3>
							<a href="https://linkedin.com/in/anders-bille-wiggers-a656b9150/" target="_blanc">
								<i className="fab fa-linkedin" /> Maybe LinkedIn?
							</a>
						</h3>
						<h3>
							<a href="https://linkedin.com/in/anders-bille-wiggers-a656b9150/" target="_blanc">
								<i className="fab fa-github" /> GitHubs also a possiblity?
							</a>
						</h3>
						<h3>
							<a href="mailto:info@anderswiggers.dk">
								<i className="fas fa-envelope-open" /> Or just shoot an email at info@anderswiggers.dk
							</a>
						</h3>
					</div>
					<style jsx>{`
						a:hover {
							text-decoration: none;
							color: blue;
						}
						a:link {
							color: #2a2e31;
						}
						a:visited {
							color: #2a2e31;
						}
						.social {
							background: #eaeaea;
							padding: 30px;
							border-radius: 6px;
						}
						.otherContainer {
							min-height: 100vh;
							padding-top: 25vh;
						}
						h3 {
							text-align: center;
							margin: 30px;
						}
					`}</style>
				</div>
			</Element>
		);
	}
}
