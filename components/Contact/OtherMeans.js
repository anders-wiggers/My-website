import React, { Component } from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

export default class OtherMeans extends Component {
	render() {
		return (
			<Element name="other">
				<div className="otherContainer">
					<h3>I have a sweet instagram</h3>
					<h3>Maybe reach me on facebook?</h3>
					<h3>Maybe LinkedIN?</h3>
					<h3>Or just shoot an email at info@anderswiggers.dk</h3>
					<style jsx>{`
						.otherContainer {
							min-height: 100vh;
							background: green;
							padding-top: 58px;
						}
					`}</style>
				</div>
			</Element>
		);
	}
}
