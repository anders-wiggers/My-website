import Link from 'next/link';

const Navbar = () => (
	<div class="navbar fixed-top navbar-expand-sm bg-light navbar-light" style={page}>
		<nav class="navbar fixed-top navbar-expand-sm bg-light navbar-light container">
			<ul class="navbar-nav">
				<li class="nav-item active">
					<Link href="/">
						<a class="nav-link">HOME</a>
					</Link>
				</li>
				<li class="nav-item">
					<Link href="/software">
						<a class="nav-link">SOFTWARE</a>
					</Link>
				</li>
				<li class="nav-item">
					<Link href="/projects">
						<a class="nav-link">PROJECTS</a>
					</Link>
				</li>
				<li class="nav-item">
					<Link href="/contact">
						<a class="nav-link">CV</a>
					</Link>
				</li>
				<li class="nav-item">
					<Link href="/contact">
						<a class="nav-link">CONTACT</a>
					</Link>
				</li>
			</ul>
		</nav>
	</div>
);

export default Navbar;

const page = {
	height: '58px'
};
