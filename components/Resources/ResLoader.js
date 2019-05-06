import React, { Component } from 'react';
import ResItem from './ResItem';

export class ResLoader extends Component {
	render() {
		return (
			<div className="holder">
				<ResItem name="Macbook Pro fix" />
				<ResItem name="Recerpies" />
				<ResItem name="How much have i lost" />

				<style jsx>{`
					.holder {
						display: grid;
						grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
						grid-gap: 25px;
						grid-auto-flow: dense;
						list-style: none;
						margin: 1em auto;
						padding: 0;
						max-width: 80vw;
					}
				`}</style>
			</div>
		);
	}
}

export default ResLoader;
