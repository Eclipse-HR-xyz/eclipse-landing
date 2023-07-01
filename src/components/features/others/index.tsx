import { sections } from "./constants";
import { Section } from "./section";
import { manrope } from "@/font";

export const Others = () => {
	return (
		<div className={`${manrope.className} border-t border-black/40 pb-28`}>
			{sections.map((el, i) => (
				<Section key={i} {...el} reverse={(i + 1) % 2 === 0} />
			))}
		</div>
	);
};
