import {
	Nav,
	Hero,
	Product,
	Partner,
	Others,
	Join,
	Footer,
	Leaves,
} from "@/components/features";

export default function Home() {
	return (
		<main className="relative">
			<Nav />
			<Hero />
			<Product />
			<Partner />
			<Others />
			<Join />
			<Footer />
			<Leaves />
		</main>
	);
}
