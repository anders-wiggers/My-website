import React, { Component } from 'react';

const standard = 'nav-item ';

export default class dashmenu extends Component {
	constructor(props) {
		super(props);

		console.log(this.props.current);
		this.state = {
			dash: standard,
			creat: standard,
			edit: standard
		};

		if (this.props.current === 'dash') {
			this.state = {
				dash: standard + 'active',
				creat: standard,
				edit: standard
			};
		}

		if (this.props.current === 'creat') {
			this.state = {
				dash: standard,
				creat: standard + 'active',
				edit: standard
			};
		}

		if (this.props.current === 'edit') {
			this.state = {
				dash: standard,
				creat: standard,
				edit: standard + 'active'
			};
		}
	}

	handleClick = (lan) => {
		this.props.changeSite(lan);
		if (lan === 'dash') {
			this.setState({
				dash: standard + 'active',
				creat: standard,
				edit: standard
			});
		}

		if (lan === 'creat') {
			this.setState({
				dash: standard,
				creat: standard + 'active',
				edit: standard
			});
		}

		if (lan === 'edit') {
			this.setState({
				dash: standard,
				creat: standard,
				edit: standard + 'active'
			});
		}
	};

	render() {
		return (
			<div>
				<ul className="nav flex-column">
					<li className={this.state.dash} onClick={() => this.handleClick('dash')}>
						Dashboard
					</li>
					<li className={this.state.creat} onClick={() => this.handleClick('creat')}>
						Create new Link
					</li>
					<li className={this.state.edit} onClick={() => this.handleClick('edit')}>
						Edit Link
					</li>
				</ul>
				<style jsx>{`
					ul {
						padding: 30px;
						margin-top: 30px;
						border-radius: 20px;
						background-color: #fafcff;
						height: 70vh;
					}

					li {
						cursor: pointer;
					}
					.active {
						color: #5299e0;
					}
				`}</style>
			</div>
		);
	}
}
