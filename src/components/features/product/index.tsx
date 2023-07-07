import { ProductCard } from "./productcard";
import { manrope } from "@/font";
import { products } from "./constants";

export const Product = () => {
	return (
		<section id="products" className="py-20">
			<h3
				className={
					manrope.className +
					" w-fit mx-auto text-center text-[39px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-green"
				}
			>
				Product
			</h3>
			<div className="max-w-7xl mx-auto flex flex-wrap justify-center mt-24 gap-[54px]">
				{products.map((el, i) => (
					<ProductCard key={i} {...el} />
				))}
			</div>
		</section>
	);
};
