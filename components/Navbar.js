import Link from 'next/link';
import react, { Component } from 'react';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			aw: 'nav-item',
			soft: 'nav-item',
			pro: 'nav-item',
			res: 'nav-item',
			cv: 'nav-item',
			contact: 'nav-item',
			menuOpen: false,
			menuValue: '☰',
			navClasses: 'navbar-nav',
			menuClass: 'mobileHeader',
			navId: 'gone'
		};
		this.showMenu = this.showMenu.bind(this);
	}

	componentDidMount() {
		if (this.props.menu === 'aw') {
			this.setState({
				aw: ' active'
			});
		}
		if (this.props.menu === 'soft') {
			this.setState({
				soft: ' active'
			});
		}
		if (this.props.menu === 'pro') {
			this.setState({
				pro: ' active'
			});
		}
		if (this.props.menu === 'cv') {
			this.setState({
				cv: ' active'
			});
		}
		if (this.props.menu === 'contact') {
			this.setState({
				contact: ' active'
			});
		}
		if (this.props.menu === 'res') {
			this.setState({
				res: ' active'
			});
		}
	}

	showMenu() {
		this.setState(
			{
				menuOpen: !this.state.menuOpen
			},
			() => {
				if (this.state.menuOpen) {
					this.setState({
						menuValue: '',
						navClasses: 'navbar-nav visible',
						menuClass: 'mobileHeader fas fa-times',
						navId: 'back'
					});
				} else {
					this.setState({
						menuValue: '☰',
						navClasses: 'navbar-nav',
						menuClass: 'mobileHeader',
						navId: 'gone'
					});
				}
			}
		);
	}

	render() {
		return (
			<div className="navbar fixed-top navbar-expand-sm bg-light navbar-light" style={page}>
				<nav
					id={this.state.navId}
					className="navbar fixed-top navbar-expand-sm bg-light navbar-light container"
				>
					<ul className={this.state.navClasses}>
						<li className={this.state.aw}>
							<Link href="/">
								<a className="nav-link">AW</a>
							</Link>
						</li>
						<li className={this.state.soft}>
							<Link href="/software">
								<a className="nav-link">SOFTWARE</a>
							</Link>
						</li>
						{/* <li className={this.state.pro}>
							<Link href="/projects">
								<a className="nav-link">PROJECTS</a>
							</Link>
						</li> */}
						<li className={this.state.res}>
							<Link href="/resources">
								<a className="nav-link">RESOURCES</a>
							</Link>
						</li>
						{/* <li className={this.state.cv}>
							<Link href="/cv">
								<a className="nav-link">CV</a>
							</Link>
						</li>*/}
						<li className={this.state.contact}>
							<Link href="/contact">
								<a className="nav-link">CONTACT</a>
							</Link>
						</li>
					</ul>
				</nav>
				<div className={this.state.menuClass} onClick={this.showMenu}>
					{this.state.menuValue}
				</div>
				<style jsx>{`
					.mobileHeader {
						display: none;
						cursor: pointer;
					}

					.displayed {
						display: inline;
					}
					/* The switch - the box around the slider */
					.switch {
						position: relative;
						display: inline-block;
						width: 54px;
						height: 20px;
					}

					/* Hide default HTML checkbox */
					.switch input {
						opacity: 0;
						width: 0;
						height: 0;
					}

					/* The slider */
					.slider {
						position: absolute;
						cursor: pointer;
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;
						background-color: #ccc;
						-webkit-transition: .4s;
						transition: .4s;
					}

					.slider:before {
						position: absolute;
						content: "";
						height: 14px;
						width: 14px;
						left: 3px;
						bottom: 3px;
						background-color: white;
						-webkit-transition: .4s;
						transition: .4s;
					}

					input:checked + .slider {
						background-color: #2196f3;
					}

					input:focus + .slider {
						box-shadow: 0 0 1px #2196f3;
					}

					input:checked + .slider:before {
						-webkit-transform: translateX(34px);
						-ms-transform: translateX(34px);
						transform: translateX(34px);
					}

					/* Rounded sliders */
					.slider.round {
						border-radius: 34px;
					}

					.slider.round:before {
						border-radius: 50%;
					}
					label {
						margin-bottom: 0;
					}

					@media screen and (max-width: 600px) {
						.navbar-nav {
							transform: translate3d(0px, -256px, 0px);
							transition: 1s;

							margin-left: 20px;
						}

						#gone {
							transform: translate3d(0px, -256px, 0px);
							transition: 1s;
						}

						#back {
							transform: translate3d(0px, 0px, 0px);
							transition: 1s;
						}

						.mobileHeader {
							display: inline;
							margin-left: 90%;
							text-align: right;
							z-index: 1030;
						}
						.visible {
							transform: translate3d(0px, 0px, 0px);
							transition: 1s;
						}
					}
					@media (prefers-color-scheme: dark) {
						.bg-light {
							background-color: red;
						}
					}
				`}</style>
			</div>
		);
	}
}

export default Navbar;

const page = {
	height: '58px'
};
