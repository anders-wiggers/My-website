import Navbar from '../Navbar';
import Head from 'next/head';
import Footer from '../footer/Footer';

const Layout = (props) => (
	<div style={body}>
		<Head>
			<title>Anders Wiggers</title>
			<link
				rel="stylesheet"
				href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
				integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
				crossorigin="anonymous"
			/>
			<link
				rel="stylesheet"
				href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
			/>
		</Head>
		<Navbar />
		<div className="container" style={defualtPadding}>
			{props.children}
		</div>
		<Footer />
	</div>
);

const body = {
	color: '#000',
	background: '#fff',
	fontFamily:
		'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
	height: '100vh',
	textAlign: 'left'
};

const defualtPadding = {
	padding: '10px',
	marginTop: '50px'
};

export default Layout;