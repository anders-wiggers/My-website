import Link from 'next/link';
import react, { Component } from 'react';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			aw: 'nav-item',
			soft: 'nav-item',
			pro: 'nav-item',
			cv: 'nav-item',
			contact: 'nav-item'
		};
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
	}

	render() {
		return (
			<div className="navbar fixed-top navbar-expand-sm bg-light navbar-light" style={page}>
				<nav className="navbar fixed-top navbar-expand-sm bg-light navbar-light container">
					<ul className="navbar-nav">
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
						<li className={this.state.pro}>
							<Link href="/projects">
								<a className="nav-link">PROJECTS</a>
							</Link>
						</li>
						<li className={this.state.contact}>
							<Link href="/contact">
								<a className="nav-link">RESOURCES</a>
							</Link>
						</li>
						<li className={this.state.cv}>
							<Link href="/contact">
								<a className="nav-link">CV</a>
							</Link>
						</li>
						<li className={this.state.contact}>
							<Link href="/contact">
								<a className="nav-link">CONTACT</a>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default Navbar;

const page = {
	height: '58px'
};
