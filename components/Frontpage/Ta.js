import React, { Component } from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

export default class skills extends Component {
	render() {
		return (
			<Element name="ta">
				<div className="main">
					<div className="padding container">
						<h1 id="title">Teaching Experience</h1>
						<div id="text">
							<span>
								During my time at Aarhus University, I have been assisting in a few courses as a Teacher
								Assistant (TA). Teacher assistant duties often depend on the course. For example, in the
								course, The Web of Things I worked primarily at the student’s café where I helped
								students who had problems understanding the assignments. However, in the course
								Introduction to Human-Computer Interactions, which I’m currently TA’ing in, I teach in a
								3-hour session where the students conduct theoretical exercises.
							</span>
							<p>Below is an overview of the courses I have TA'ed in.</p>
						</div>
						<div id="tableContainer">
							<table className="table table-striped">
								<thead>
									<tr>
										<th scope="col">Course</th>
										<th scope="col">Description</th>
										<th scope="col">Taught</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th scope="row">The Web of Things</th>
										<td>
											The purpose of the course is to introduce the WWW and its architecture, as
											well as the concepts and realities behind pervasive computing.
										</td>
										<td>January 2020 - March 2020</td>
									</tr>
									<tr>
										<th scope="row">Introduction to Human-Computer Interaction</th>
										<td>
											The course aims to introduce students to the basic elements of
											Human-Computer Interaction (HCI). The goal is for students to gain a solid
											understanding of HCI issues relevant to the development of any kind of
											interactive system. This includes an understanding of human abilities and
											characteristics; of design principles and guidelines; and of forms of
											interaction and input/output devices. Students learn how usability can be
											measured, and practice analysis, design, implementation, and evaluation of
											user interfaces.
										</td>
										<td>Currently TA'ing</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<style jsx>
						{`
							p {
								padding: 20px;
							}
							#tableContainer {
								padding-top: 30px;
							}
							#text {
								padding-top: 80px;
								line-height: 1.5;
								text-align: center;
							}
							.main {
								min-height: 100vh;
								line-height: 100vh;
								background: #f3f3f3;
								color: #333;
								width: 100vw;
								position: relative;
								margin-left: -50vw;
								left: 50%;
								padding-bottom: 80px;
							}
							.padding {
								padding-top: 80px;
								line-height: 1;
							}

							#title {
								text-align: center;
							}
							@media screen and (max-width: 600px) {
								.container {
									display: none;
								}
								.mobile {
									display: inline;
								}
								.express {
									font-size: 20vw;
								}
								.col-4 {
									max-width: 100%;
									flex: 100%;
								}
								.col-8 {
									max-width: 100%;
									height: auto;
									flex: 100%;
								}
								.padding-fix {
									padding-top: 40px;
								}
								.main {
									line-height: 1;
									padding: 20px;
								}
							}
							@media (prefers-color-scheme: dark) {
								.main {
									background: #232527;
									color: #909090;
								}
								table {
									color: #909090;
									border-color: ;
								}
							}
						`}
					</style>
				</div>
			</Element>
		);
	}
}
