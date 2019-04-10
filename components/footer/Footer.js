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
								<span className="fa fa-github fitme" />
								<a>Github</a>
							</div>
							<div className="col-sm">
								<p>|</p>
							</div>
							<div className="col-sm">
								<span className="fa fa-linkedin fitme" />LinkedIn
							</div>
							<div className="col-sm">
								<p>|</p>
							</div>
							<div className="col-sm ">
								<span className="fa fa-facebook fitme" />Facebook
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
				`}</style>
			</footer>
		);
	}
}

export default Footer;
