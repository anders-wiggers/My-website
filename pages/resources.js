import Layout from '../components/Layout/Layout.js';
import ResLoader from '../components/Resources/ResLoader';
import ResPage from '../components/Resources/ResPage';

import { withRouter } from 'next/router'
import React, { Component } from 'react';



class Resources extends Component {
    constructor(props){
        super(props)
    }
		
renderDefault(){
	return(
		<Layout title="Resources" menu="res">
		<div>
			<h1>Resources</h1>
			<ResLoader />
		</div>
	</Layout>
	)
}

renderQuery(){
    const { router } = this.props

	return(
		<Layout title={`Resources: ${router.query.title}`} menu="res">
		<ResPage title={router.query.title}></ResPage>
	</Layout>
	)
}

  render() {
		const { router } = this.props
		console.log(router.query)

		let isQuery = false;
		if(!router.query.title){
			isQuery = true
		}

		console.log(isQuery)
    return (
      isQuery ? this.renderDefault() : this.renderQuery()
    )
  }
}


export default withRouter(Resources)

