import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import ReCAPTCHA from 'react-google-recaptcha';
import Snackbar from '@material-ui/core/Snackbar';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

export default class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			subject: '',
			email: '',
			message: ''
		};
	}

	handleChange = (whichState) => (event) => {
		this.setState({
			[whichState]: event.target.value
		});
	};

	render() {
		return (
			<div className="conner">
				<div>
					<form className="form">
						<h5>Via contact form?</h5>
						<div className="centering">
							<TextField
								required
								id="standard-required"
								label="Name"
								placeholder="John Doe"
								margin="normal"
								fullWidth
								className="spaceing"
								value={this.state.name}
								onChange={this.handleChange('name')}
							/>
						</div>
						<div className="centering">
							<TextField
								required
								fullWidth
								id="standard-required"
								label="Subject"
								placeholder="I like your work 😄"
								margin="normal"
								className="spaceing"
								value={this.state.subject}
								onChange={this.handleChange('subject')}
							/>
						</div>
						<div className="centering">
							<TextField
								required
								fullWidth
								id="standard-required"
								label="Email"
								placeholder="john@thedoest.com"
								margin="normal"
								className="spaceing"
								value={this.state.email}
								onChange={this.handleChange('email')}
							/>
						</div>
						<div className="centering">
							<TextField
								required
								multiline
								fullWidth
								id="standard-required"
								label="Message"
								placeholder="I have never ever in my life seen such a beatiful website, the webstack is amazing"
								margin="normal"
								className="spaceing"
								value={this.state.message}
								onChange={this.handleChange('message')}
							/>
						</div>
						<div className="captcha centering">
							<h4>The human test 🤖</h4>
							<ReCAPTCHA
								sitekey="6LddwqgUAAAAAHhunVzMtBufLIIDWdHsbc-EmcEu"
								onChange={this.handleCaptcha}
							/>
						</div>
						<div className="centering">
							<button>Submit</button>
						</div>
					</form>
					<Link
						activeClass="active"
						to="other"
						spy={true}
						smooth={true}
						offset={0}
						duration={1000}
						onSetActive={this.handleSetActive}
					>
						<div className="goto">
							<h5 className="via">Via other means?</h5>
							<h3>
								<span className="fa fa-sort-down via" />
							</h3>
						</div>
					</Link>
				</div>
				<style jsx>{`
					.via {
						font-weight: 300;
					}

					h3 {
						margin-top: -20px;
						text-align: center;
					}
					.goto {
						color: #3a3a3a;
						cursor: pointer;
						margin: 50px auto;
						width: 20vw;
					}
					h5 {
						text-align: center;
						font-weight: 700;
					}
					.form {
						margin-top: 10vh;
						background-color: #f2f2f2;
						padding: 30px;
						border-radius: 10px;
					}
					.conner {
						min-height: 100vh;
					}
					.spaceing {
						width: 100%;
					}
					.centering {
						width: 70%;
						margin: 0 auto;
						text-align: center;
					}
					.captcha {
						margin: 0 auto;
						width: 304px;
					}
				`}</style>
			</div>
		);
	}
}
