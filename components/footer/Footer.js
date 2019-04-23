import React, { Component } from 'react';
import _JSXStyle from 'styled-jsx/style';
import './dummy.css';

class Footer extends Component {
	render() {
		return (
			<footer class="page-footer font-small cyan darken-3">
				<div className="footer">Thank you for visiting my portfolio</div>
				<style jsx global>{`
					.footer {
						min-height: 200px;
						background-color: #212529;
						text-align: center;
						color: white;
						vertical-align: middle;
						line-Height: 200px;
						text-transform: uppercase;
						font-weight: 150;
					}
				`}</style>
				<div className="footerCon">
					<div className="container">
						<div className="row">
							<div className="col-sm">
								<a href="https://github.com/anders-wiggers" target="_blank">
									<span className="fa fa-github fitme" />
									<a>Github</a>
								</a>
							</div>
							<div className="col-sm">
								<p>|</p>
							</div>
							<div className="col-sm">
								<a href="https://linkedin.com/in/anders-bille-wiggers-a656b9150/" target="_blank">
									<span className="fa fa-linkedin fitme" />LinkedIn
								</a>
							</div>
							<div className="col-sm">
								<p>|</p>
							</div>
							<div className="col-sm ">
								<a href="https://www.facebook.com/anders.wiggers" target="_blank">
									<span className="fa fa-facebook fitme" />Facebook
								</a>
							</div>
						</div>
					</div>
				</div>
				<style jsx>{`
					.menu {
						height: 50px;
						background-color: #333;
						color: white;
						vertical-Align: middle;
						text-align: center;
					}

					.footerCon {
						text-align: center;
						background-color: #191919;
						color: white;
						padding: 20px;
					}

					.rowAddon {
						padding: 13px;
					}

					.fitme {
						padding: 11px;
					}

					p {
						padding: 10px;
						margin: 0;
					}

					a {
						color: white;
					}

					a:visited {
						color: white;
					}

					a:hover {
						text-decoration: none;
						color: #d8d8d8;
					}
				`}</style>
			</footer>
		);
	}
}

export default Footer;
