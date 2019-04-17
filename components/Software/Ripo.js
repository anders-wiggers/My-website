import React, { Component } from 'react';
import _JSXStyle from 'styled-jsx/style';

export class Ripo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ripoNames: []
		};
	}

	componentDidMount() {
		let fetchedData;
		fetch('https://api.github.com/users/' + this.props.reponame + '/repos?per_page=15')
			.then((result) => {
				return result.json;
			})
			.then((data) => {
				this.setState({ ripoNames: data });
				fetchedData = data;
				console.log(data);
			});
	}
	render() {
		return (
			<div className="container fullScreen">
				<h3>My personal Software Repository</h3>
				<style jsx>{`
					.fullScreen {
						min-height: 100vh;
						padding-top: 30px;
					}
				`}</style>
			</div>
		);
	}
}

export default Ripo;
