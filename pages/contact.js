import Layout from '../components/Layout/Layout.js';
import UC from '../components/uc';
import OtherMeans from '../components/Contact/OtherMeans';
import Contact from '../components/Contact/Contact';
import SEO from 'react-seo-component';

const Contacts = () => (
	<Layout title="Contact me" menu="contact">
		<SEO
			title="Contact me"
			description={'If you want to get in touch with me use this page.'}
			pathname={'https://anderswiggers.dk/contact'}
		/>
		<div>
			<Contact />
			<OtherMeans />
		</div>
	</Layout>
);

export default Contacts;
