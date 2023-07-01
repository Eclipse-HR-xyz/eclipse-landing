import { HandPay } from "@/assets/illustrations";
import { ProductCard } from "./productcard";
import { manrope } from "@/font";

const products = [
	{
		image: HandPay,
		title: "Payroll",
		subtitle: "Automated payments in fiat and digital assets.",
	},
];

export const Product = () => {
	return (
		<section id="products" className="py-20">
			<h3
				className={
					manrope.className +
					" text-center text-[39px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-green"
				}
			>
				Product
			</h3>
			<div className="flex justify-center mt-24">
				{products.map((el, i) => (
					<ProductCard key={i} {...el} />
				))}
			</div>
		</section>
	);
};
