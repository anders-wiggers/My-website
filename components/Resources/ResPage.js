import React, { Component } from 'react'
import axios from 'axios';


export default class ResPage extends Component {
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
			.get(window.encodeURI(`http://localhost:3001/api/res?name=${this.props.title}`))
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

	renderLoading() {
		return (
			<div className="loader">
        <img src="https://yalantis.com/uploads/ckeditor/pictures/365/content_Loading-Loop-1.gif"></img>
				<style jsx>{`
					.loader {
						text-align: center;
						height: 70vh;
						line-height: 70vh;
					}
					img {
						height: 200px;
					}
				`}</style>
			</div>
		);
	}

	renderError() {
		return (
			<div>
				<div className="error">Sorry the requested resources is unvialbe</div>
        <style jsx>{`
					.error {
						table-layout: fixed;
						width: 100%;
            text-align: center;
						display: table;
            line-height:80vh;
						height: 100vh;
					}
				`}</style>
			</div>
		);
	}


	renderResources() {
		const { error, content } = this.state;

		if (error) {
			console.log(error);
			return this.renderError();
		}

		if (content === null){
			return this.renderError();
		}

		return (
			<div className="xs">
        <h1>{content.resourceName}</h1>
				<style jsx>{`
					.xs {
						height:20px;
					}
				`}</style>
			</div>
		);
	}

	render() {
		return (
			<div>
				<div className="res">{this.state.loading ? this.renderLoading() : this.renderResources()}</div>
				<style jsx>{`
					.res {
						table-layout: fixed;
						width: 100%;
						display: table;
						height: 86vh;
					}
				`}</style>
			</div>
		);
	}
}
