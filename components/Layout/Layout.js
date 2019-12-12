import Navbar from '../Navbar';
import Head from 'next/head';
import Footer from '../footer/Footer';
import { initGA, logPageView } from '../Utils/analytics';
import React, { Component } from 'react';

export default class Layout extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		if (!window.GA_INITIALIZED) {
			initGA();
			window.GA_INITIALIZED = true;
		}
		logPageView();
	}
	render() {
		return (
			<div>
				<Head>
					<title>{this.props.title}</title>
					<link rel="icon" type="image/x-icon" href="/static/images/aw.png" />
					<link
						rel="stylesheet"
						href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
						integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
						crossorigin="anonymous"
					/>
					<link
						rel="stylesheet"
						href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
						integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
						crossorigin="anonymous"
					/>

					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
					/>
				</Head>
				<Navbar menu={this.props.menu} />
				<div className="container" style={defualtPadding}>
					{this.props.children}
				</div>
				<Footer />
				<style jsx global>{`
					body {
						color: #000;
						background-color: #fff;
						font-family: -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir,
							"Helvetica Neue", "Lucida Grande", sans-serif;
						height: 100vh;
						text-align: left;
						WebkitFontSmoothing: antialiased;
						overflow-x: hidden;
						overflow-y: scroll;
					}

					@media (prefers-color-scheme: dark) {
						body {
							color: #909090;
							background-color: #1d1c1c;
						}
						.bg-light {
							background-color: #282b2d !important;
							color: #fff;
						}
						.navbar-light .navbar-nav .nav-link {
							color: rgba(255, 255, 255, 0.5);
						}
						.navbar-light .navbar-nav .active > .nav-link,
						.navbar-light .navbar-nav .nav-link.active,
						.navbar-light .navbar-nav .nav-link.show,
						.navbar-light .navbar-nav .show > .nav-link {
							color: rgba(255, 255, 255, 0.76);
						}
						.navbar-light .navbar-nav > li > a:hover,
						.navbar-light .navbar-nav > li > a:focus {
							color: #fff !important;
						}
					}
				`}</style>
			</div>
		);
	}
}

const defualtPadding = {
	padding: '10px',
	minHeight: '100vh',
	marginTop: '50px'
};
