import React, { Component } from 'react';
import axios from 'axios';
import getConfig from 'next/config';
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

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
			.get(window.encodeURI(`${publicRuntimeConfig.localApi}/api/res?name=${this.props.title}`))
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

	renderFromBlock() {
		let blocks = this.state.content.content.blocks;

		let html = [];

		blocks.forEach((block) => {
			switch (block.type) {
				case 'header':
					let elem = React.createElement(`h${block.data.level}`, null, block.data.text);

					html.push(elem);
					break;
				case 'paragraph':
					let a = {
						__html: block.data.text
					};
					html.push(<div dangerouslySetInnerHTML={a} className="paragraph beauty" />);
					break;
				case 'list':
					html.push(
						<ul className="list">
							{block.data.items.map((item) => (
								<li dangerouslySetInnerHTML={{ __html: item }} className="beauty" />
							))}
						</ul>
					);
					break;
				case 'delimiter':
					html.push(<div className="delimiter beauty">* * *</div>);
					break;
				case 'image':
					html.push(<img className="img" src={block.data.file.url} />);
					break;
				case 'code':
					html.push(<div className="codeWindow" dangerouslySetInnerHTML={{ __html: block.data.code }} />);
			}
		});

		return html;
	}

	render() {
		return (
			<div>
				<div className="outer">
					<div className="res">{this.state.loading ? this.renderLoading() : this.renderFromBlock()}</div>
				</div>
				<style jsx>{`
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
					@media screen and (max-width: 600px) {
						.outer {
							margin: 0px;
							padding: 0px;
						}
					}
				`}</style>
				<style jsx global>{`
					.img {
						width: 100%;
					}
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
					h2 {
						font-family: Lucida Grande, Lucida Sans Unicode, Lucida Sans;
						letter-spacing: -.03em;
						padding: 1em 0;
						margin: 0;
						margin-bottom: -0.9em;
						line-height: 1em;
						outline: none;
						font-size: 1.5em;
					}
					h3 {
						font-family: Lucida Grande, Lucida Sans Unicode, Lucida Sans;
						letter-spacing: -.03em;
						padding: 1em 0;
						margin: 0;
						margin-bottom: -0.9em;
						line-height: 0.5em;
						outline: none;
						font-size: 1.17em;
					}
					.list {
						margin-top: 1rem;
					}
					.delimiter {
						margin: 20px;
						text-align: center;
						font-size: 1.5em;
					}
					.paragraph {
						padding: .7em 0;
						line-height: 1.6em;
					}

					.beauty {
						letter-spacing: .005em;
						color: #313649;
						-webkit-font-smoothing: antialiased;
					}
					code {
						background: rgba(251, 241, 241, 0.78);
						color: #c44545;
						padding: 4px 6px;
						border-radius: 2px;
						margin: 0 2px;
						font-family: Menlo, Monaco, Consolas, Courier New, monospace;
						font-size: 0.9em;
					}
					.codeWindow {
						padding: 20px;
						font-family: Menlo, Monaco, Consolas, Courier New, monospace;
						color: #41314e;
						line-height: 1.6em;
						font-size: 12px;
						background: #f8f7fa;
						border: 1px solid #f1f1f4;
						box-shadow: none;
						white-space: pre;
						word-wrap: normal;
						overflow-x: auto;
						margin: 20px;
					}
				`}</style>
			</div>
		);
	}
}
