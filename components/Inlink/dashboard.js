import React, { Component } from 'react';

export default class dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: 'awesome'
		};
	}
	render() {
		const user = this.props.data.data;
		console.log(user);
		return (
			<div>
				<h2 className="title"> Welcome to inLink</h2>
				<div className="blueDecal">
					<div className="user">
						<div className="logged"> Logged in as:</div>
						<div className="row">
							<div className="col-6 ig">
								<img className="igPicture" src={user.profile_picture} />
								<h4 className="igName">{user.full_name}</h4>
							</div>
							<div className="col-6 d-flex align-items-center">
								<div className="igStats ">
									<h5>
										<i className="fas fa-users" /> {user.counts.followed_by}
									</h5>
									<h5>
										<i className="fas fa-user-secret" /> {user.counts.follows}
									</h5>

									<h5>
										<i className="fas fa-camera" /> {user.counts.media}
									</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row ">
					<div className="col-6 chillspace">
						<div className="greenDecal">
							<div className="user inLinkStats">
								<h6>Active Links</h6>
								<h4>21</h4>
							</div>
						</div>
					</div>
					<div className="col-6 chillspace">
						<div className="greenDecal">
							<div className="user inLinkStats">
								<h6>Unique Users</h6>
								<h4>104</h4>
							</div>
						</div>
					</div>
					<div className="col-6 chillspace">
						<div className="greenDecal">
							<div className="user inLinkStats">
								<h6>Daily Clicks</h6>
								<h4>502</h4>
							</div>
						</div>
					</div>
					<div className="col-6 chillspace">
						<div className="greenDecal">
							<div className="user inLinkStats">
								<h6>Total Click</h6>
								<h4>201001</h4>
							</div>
						</div>
					</div>
				</div>
				<style jsx>{`
					.igPicture {
						border-radius: 100%;
						display: block;
						margin-left: auto;
						margin-right: auto;
						width: 70%;
						margin-top: 20px;
					}
					.logged {
						background-color: #f8fdff;
						color: #5299e0;
						margin-top: -10px;
						margin-left: -10px;
						width: 110%;
						padding: 10px;
					}
					.title {
						margin-top: 30px;
						text-align: center;
						color: #707070;
						font-weight: 300;
						font-size: 1.5em;
					}
					.blueDecal {
						background-color: #5299e0;
						border-radius: 10px;
						-webkit-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2);
						-moz-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2);
						box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2);
					}
					.user {
						overflow: hidden;
						background-color: white;
						border-radius: 10px;
						margin-left: 10px;
						padding: 10px;
						width: 100%;
					}
					.igName {
						color: #707070;
						text-transform: uppercase;
						letter-spacing: 2px;
						font-size: 1em;
						text-align: center;
						margin-top: 10px;
					}
					.igStats {
						color: #707070;
						padding: 30px;
						background-color: #f5f5f5;
						border-radius: 20px;
						width: 80%;
						margin: 0 auto;
					}

					.greenDecal {
						background-color: #73e052;
						border-radius: 10px;
						-webkit-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2);
						-moz-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2);
						box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2);
					}
					.inLinkStats {
						color: #707070;
						padding: 15px;
					}
					.chillspace {
						margin-top: 30px;
					}
					h6 {
						font-weight: 300;
					}
				`}</style>
			</div>
		);
	}
}
