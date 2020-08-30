import React, { Component } from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

export default class skills extends Component {
	render() {
		return (
			<Element name="ProductDev">
				<div className="main">
					<div className="padding container">
						<h1 id="title">Product Development</h1>
					</div>
					<style jsx>
						{`
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
								background: #f3f3f3;
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
									background: #232527;
									color: #909090;
								}
							}
						`}
					</style>
				</div>
			</Element>
		);
	}
}
