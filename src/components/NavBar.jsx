import { navLinks } from "../constants";

export default function NavBar() {
	return (
		<header>
			<nav>
				<img src="/logo.svg" alt="Appl logo" />
				<ul>
					{navLinks.map(({ label }) => (
						<li key={label}>
							<a href={label}>{label}</a>
						</li>
					))}
				</ul>
				<div className={`flex-center gap-3`}>
					<button type="button">
						<img src="/search.svg" alt="search" />
					</button>
					<button type="button">
						<img src="/cart.svg" alt="cart" />
					</button>
				</div>
			</nav>
		</header>
	);
}
