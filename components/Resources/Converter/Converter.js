import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

const AntSwitch = withStyles((theme) => ({
	root: {
		width: 28,
		height: 16,
		padding: 0,
		display: 'flex'
	},
	switchBase: {
		padding: 2,
		color: theme.palette.grey[500],
		'&$checked': {
			transform: 'translateX(12px)',
			color: theme.palette.common.white,
			'& + $track': {
				opacity: 1,
				backgroundColor: '#89bee0',
				borderColor: '#89bee0'
			}
		}
	},
	thumb: {
		width: 12,
		height: 12,
		boxShadow: 'none'
	},
	track: {
		border: `1px solid ${theme.palette.grey[500]}`,
		borderRadius: 16 / 2,
		opacity: 1,
		backgroundColor: theme.palette.common.white
	},
	checked: {}
}))(Switch);

export class Converter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			decimal: '',
			binary: '',
			isTwos: false
		};

		this.handleClick = this.handleClick.bind(this);
	}

	resetState() {
		this.setState({
			decimal: '',
			binary: ''
		});
	}

	handleChange = (name) => (event) => {
		let value = event.target.value;
		if (name === 'decimal') {
			if (value === '') {
				this.resetState();
			} else {
				var converted;

				if (value > 0) converted = Number(value).toString(2);
				if (value < 0) converted = ((~(value * -1) + 1) >>> 0).toString(2);

				this.setState({
					[name]: event.target.value,
					binary: converted
				});
			}
		}
		if (name === 'binary') {
			if (/^[0-1]+$/.test(event.target.value) || event.target.value === '') {
				if (this.state.isTwos) {
					if (value === '') {
						this.resetState();
					} else {
						converted = ~~parseInt(value, 2);

						let mask;
						let tempValue = value;

						var count = 0;
						if (value >= 1) ++count;

						while (tempValue / 10 >= 1) {
							tempValue /= 10;
							++count;
						}

						mask = 1;
						mask = mask << count;
						mask--;

						let newValue = converted;

						newValue = newValue ^ mask;
						newValue = ~newValue;

						this.setState({
							[name]: event.target.value,
							decimal: newValue
						});
					}
				} else {
					if (value === '') {
						this.resetState();
					} else {
						converted = parseInt(value, 2);

						this.setState({
							[name]: event.target.value,
							decimal: converted
						});
					}
				}
			}
		}
	};

	handleClick() {
		this.setState({
			isTwos: !this.state.isTwos
		});
		let value = this.state.binary;
		let converted;
		if (!this.state.isTwos) {
			if (value === '') {
				this.resetState();
			} else {
				converted = ~~parseInt(value, 2);

				let mask;
				let tempValue = value;

				var count = 0;
				if (value >= 1) ++count;

				while (tempValue / 10 >= 1) {
					tempValue /= 10;
					++count;
				}

				mask = 1;
				mask = mask << count;
				mask--;

				let newValue = converted;

				newValue = newValue ^ mask;
				newValue = ~newValue;

				this.setState({
					[name]: event.target.value,
					decimal: newValue
				});
			}
		} else {
			if (value === '') {
				this.resetState();
			} else {
				converted = parseInt(value, 2);

				this.setState({
					[name]: event.target.value,
					decimal: converted
				});
			}
		}
	}

	render() {
		return (
			<div className="box">
				<h2 className="title">Binary Converter with Two's Compliment</h2>
				<TextField
					required
					id="decimal"
					label="Decimal"
					placeholder="22"
					margin="normal"
					className="spaceing"
					value={this.state.decimal}
					onChange={this.handleChange('decimal')}
				/>
				<TextField
					required
					id="binary"
					label="Binary"
					placeholder="10110"
					margin="normal"
					className="spaceing"
					value={this.state.binary}
					onChange={this.handleChange('binary')}
				/>
				<div className="slider">
					<Grid component="label" container alignItems="center" spacing={1}>
						<Grid item>Unsigned</Grid>
						<Grid item>
							<AntSwitch checked={this.state.isTwos} onChange={this.handleClick} value="checkedC" />
						</Grid>
						<Grid item>Signed</Grid>
					</Grid>
				</div>
				<style jsx>{`
					.title {
						font-weight: 300;
					}
					.box {
						border-radius: 40px;
						background-color: #f4f4f4;
						text-align: center;
						padding: 40px;
						margin-top: 30vh;
					}
					.slider {
						padding-left: 204px;
						margin: 0 auto;
						width: 408px;
					}
					@media screen and (max-width: 600px) {
						.box {
							margin-top: 10vh;
						}
						.slider {
							padding-left: 0px;
							width: 178px;
						}
					}
					@media (prefers-color-scheme: dark) {
						.box {
							background-color: #262729;
						}
						.MuiFormLabel-root {
							color: white;
						}
					}
				`}</style>
			</div>
		);
	}
}

export default Converter;
