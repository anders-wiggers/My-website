import React, { Component } from 'react';
import axios from 'axios';
import Loading from '../Loading';

export default class XrpCustom extends Component {
	constructor(props) {
		super(props);

		this.state = {
			content: [],
			loading: true,
			error: null
		};
	}

	componentDidMount() {
		axios
			.get(window.encodeURI(`http://localhost:3001/api/xrptrack?id=${this.props.lewd}`))
			.then((response) => {
				const content = response.data;
				this.setState({
					content,
					loading: false
				});
			})
			.catch((error) => {
				this.setState({
					error: error,
					loading: false
				});
			});
	}

	renderSite() {
		console.log(this.state.content);
		return <div />;
	}

	render() {
		return (
			<div className="outer">
				<div className="res">{this.state.loading ? <Loading /> : this.renderSite()}</div>
			</div>
		);
	}
}
