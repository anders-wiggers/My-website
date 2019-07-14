import React, { Component } from 'react';

export default class Dashboard extends Component {
	render() {
		return (
			<div>
				<div className="body">
					<h3>Blindz:</h3>
					<div className="box">
						<h5>Værelse:</h5>
					</div>
					<div className="box">
						<h5>Stue:</h5>
					</div>
				</div>
				<style jsx>{`
					.body{
                        margin-top: 30px;
                        padding: 30px;
                        height: 500px;
                        background-color: #ececec;
                        border-radius: 20px;
                    }

                    .box{
                        background-color: white;
                        border-radius: 10px;
                        padding: 30px;
                        margin: 20px;
                    }

					@media screen and (max-width: 600px) {
						.login {
						margin-top: 20vh;
					}
				`}</style>
			</div>
		);
	}
}
