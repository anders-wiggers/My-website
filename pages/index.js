import Layout from '../components/Layout/Layout.js';
import Entry from '../components/Frontpage/Entry.js';
import Appdev from '../components/Frontpage/Appdev.js';
import Webdev from '../components/Frontpage/Webdev.js';

const Index = () => (
	<Layout>
		<Entry />
		<Appdev />
		<Webdev />
	</Layout>
);

export default Index;
