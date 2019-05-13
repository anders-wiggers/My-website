import React, { Component } from 'react';
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
				<img src="https://yalantis.com/uploads/ckeditor/pictures/365/content_Loading-Loop-1.gif" />
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
						line-height: 80vh;
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

		if (content === null) {
			return this.renderError();
		}

		return (
			<div className="xs">
				<h1>{content.resourceName}</h1>
				<h3>{content.resourceDescription}</h3>
				<p>{content.resourceDescription}</p>

				<style jsx>{`
					.xs {
						height: 20px;
					}
				`}</style>
			</div>
		);
	}

	renderFromBlock() {
		const data = {
			time: 1557690088396,
			blocks: [
				{
					type: 'header',
					data: {
						text: 'Editor.js',
						level: 2
					}
				},
				{
					type: 'paragraph',
					data: {
						text: 'Hey. Meet the new Editor. On this page you can see it in action — try to edit this text.'
					}
				},
				{
					type: 'header',
					data: {
						text: 'Key features',
						level: 3
					}
				},
				{
					type: 'list',
					data: {
						style: 'unordered',
						items: [
							'It is a block-styled editor',
							'It returns clean data output in JSON',
							'Designed to be extendable and pluggable with a simple API'
						]
					}
				}
			],
			version: '2.12.4'
		};

		let blocks = data.blocks;

		let html = [];

		blocks.forEach((block) => {
			console.log(block);
			switch (block.type) {
				case 'header':
					html.push(<h1>{block.data.text}</h1>);
					break;
				case 'paragraph':
					html.push(<p>{block.data.text}</p>);
					break;
				case 'list':
					html.push(<ul>{block.data.items.map((item) => <li>{item}</li>)}</ul>);
			}
		});

		return html;
	}

	CustomTag(hPoperty) {
		return `h${hPoperty}`;
	}

	render() {
		return (
			<div>
				<div className="outer">
					<div className="res">{this.state.loading ? this.renderLoading() : this.renderFromBlock()}</div>
				</div>
				<style jsx>{`
					h1 {
						font-family: Lucida Grande, Lucida Sans Unicode, Lucida Sans;
						letter-spacing: -.03em;
						padding: 1em 0;
						margin: 0;
						margin-bottom: -0.9em;
						line-height: 1.5em;
						outline: none;
						font-size: 1em;
					}
					.outer {
						margin: 50px 0 50px 0;
						background-color: aliceblue;
						padding: 40px;
						border-radius: 50px;
					}
					.res {
						padding: 40px;
						table-layout: fixed;
						width: 100%;
						display: table;
						height: 86vh;
						color: #313649;
						background-color: white;
						border-radius: 5px;
						-webkit-box-shadow: 0px 0px 21px -5px rgba(0, 0, 0, 0.22);
						-moz-box-shadow: 0px 0px 21px -5px rgba(0, 0, 0, 0.22);
					}
				`}</style>
				<style jsx global>{`
					h1 {
						font-family: Lucida Grande, Lucida Sans Unicode, Lucida Sans;
						letter-spacing: -.03em;
						padding: 1em 0;
						margin: 0;
						margin-bottom: -0.9em;
						line-height: 1.5em;
						outline: none;
						font-size: 2em;
					}
				`}</style>
			</div>
		);
	}
}
