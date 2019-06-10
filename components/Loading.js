import React, { Component } from 'react';

export default class Loading extends Component {
	render() {
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
}
