import React, { Component } from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

export default class skills extends Component {
	render() {
		return (
			<Element name="skills">
				<div className="c">
					<h1>My Skills</h1>
					<style jsx>
						{`
							.c {
								background: red;
								height: 100vh;
							}
						`}
					</style>
				</div>
			</Element>
		);
	}
}
