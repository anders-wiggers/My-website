import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const currencies = [
	{
		value: 'USD',
		label: '$'
	},
	{
		value: 'EUR',
		label: '€'
	}
];

export default class CreatorItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currency: 'USD',
			id: '',
			amount: '',
			price: '',
			iam: this.props.iam
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange = (name) => (event) => {
		this.setState(
			{
				[name]: event.target.value
			},
			() => {
				this.props.weChangeState(this.state);
			}
		);
	};

	render() {
		return (
			<div>
				<TextField
					required
					id="standard-required"
					label="Buy ID"
					placeholder="First Buy"
					margin="normal"
					className="spaceing"
					value={this.state.id}
					onChange={this.handleChange('id')}
				/>

				<TextField
					required
					id="standard-required"
					label="Buy Amount"
					placeholder="1000"
					margin="normal"
					value={this.state.amount}
					onChange={this.handleChange('amount')}
				/>

				<TextField
					required
					id="standard-required"
					label="XRP price"
					placeholder="0.34"
					margin="normal"
					value={this.state.price}
					onChange={this.handleChange('price')}
				/>

				<TextField
					id="standard-select-currency"
					select
					label="Select"
					value={this.state.currency}
					className="currency"
					value={this.state.currency}
					onChange={this.handleChange('currency')}
					SelectProps={{
						MenuProps: {}
					}}
					helperText="Please select your currency"
					margin="normal"
				>
					{currencies.map((option) => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</TextField>
			</div>
		);
	}
}
