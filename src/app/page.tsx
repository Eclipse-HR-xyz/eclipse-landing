import {
	Nav,
	Hero,
	Product,
	Partner,
	Others,
	Join,
	Footer,
} from "@/components/features";

export default function Home() {
	return (
		<main>
			<Nav />
			<Hero />
			<Product />
			<Partner />
			<Others />
			<Join />
			<Footer />
		</main>
	);
}
