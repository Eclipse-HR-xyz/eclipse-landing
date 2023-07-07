import { Leaf1, Leaf2, Leaf3, Leaf4, Leaf5 } from "@/assets/leaf";
import Image from "next/image";

export const Leaves = () => {
	return (
		<div className="hidden lg:block">
			<Image
				src={Leaf1}
				alt=""
				className="absolute top-[905px] left-0 -z-10"
			/>
			<Image
				src={Leaf2}
				alt=""
				className="absolute top-[2248px] left-0 -z-10"
			/>
			<Image
				src={Leaf3}
				alt=""
				className="absolute top-[2248px] right-0 -z-10"
			/>
			<Image
				src={Leaf4}
				alt=""
				className="absolute bottom-[545px] left-0 -z-10"
			/>
			<Image
				src={Leaf5}
				alt=""
				className="absolute bottom-[442px] right-0 -z-10"
			/>
		</div>
	);
};
