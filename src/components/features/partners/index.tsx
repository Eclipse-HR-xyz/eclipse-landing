import { manrope } from "@/font";
import { partnerList } from "./constant";
import Image from "next/image";

export const Partner = () => {
	return (
		<section id="partner" className="pb-20">
			<h3
				className={
					manrope.className +
					" w-fit mx-auto text-[39px] mb-[24px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-green"
				}
			>
				Our partners
			</h3>
			<div className="flex justify-center gap-[50px] flex-wrap">
				{partnerList.map((el, i) => (
					<Image
						key={i}
						src={el.src}
						alt={el.alt}
						className="object-contain"
					/>
				))}
			</div>
		</section>
	);
};
