import Layout from '../components/Layout/Layout.js';
import Entry from '../components/Frontpage/EntryRemasterd.js';
import Appdev from '../components/Frontpage/Appdev.js';
import Webdev from '../components/Frontpage/Webdev.js';
import TA from '../components/Frontpage/Ta';
import Bsc from '../components/Frontpage/BscThesis';
import SEO from 'react-seo-component';

const Index = () => (
	<Layout title="Anders Wiggers" menu="aw">
		<SEO
			title="Anders Wiggers"
			description="Personal portfolio and repository of resources, computer science student at AU, Cloud Native, Kubernetes and Full-Stack developer"
			pathname="https://anderswiggers.dk"
		/>
		<Entry />
		<Appdev />
		<Webdev />
		<TA />
		<Bsc />
	</Layout>
);

export default Index;
