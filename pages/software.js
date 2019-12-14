import Layout from '../components/Layout/Layout.js';
import Ripo from '../components/Software/Ripo';
import SEO from 'react-seo-component';
// release test

const Software = () => (
	<Layout title="Software" menu="soft">
		<SEO
			title="Software"
			description="Repository of software which i have developed or taking part in developing"
			pathname="https://anderswiggers.dk/software"
		/>
		<Ripo name="anders-wiggers" />
	</Layout>
);

export default Software;
