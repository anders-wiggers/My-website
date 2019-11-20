import Layout from '../components/Layout/Layout.js';
import UC from '../components/uc';
import OtherMeans from '../components/Contact/OtherMeans';
import Contact from '../components/Contact/Contact';

const Contacts = () => (
	<Layout title="Contact me" menu="contact">
		<div>
			<Contact />
			<OtherMeans />
		</div>
	</Layout>
);

export default Contacts;
