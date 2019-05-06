import Layout from '../components/Layout/Layout.js';
import ResLoader from '../components/Resources/ResLoader';

const Resources = () => (
	<Layout title="Resources" menu="res">
		<div>
			<h1>Resources</h1>
			<ResLoader />
		</div>
	</Layout>
);

export default Resources;
