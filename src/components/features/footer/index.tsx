import Logo from "@/assets/Eclipse HR logo white.png";
import Image from "next/image";
import { footercontent } from "./constants";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export const Footer = () => {
	return (
		<div className="text-white bg-primary-dark">
			<div className="max-w-[1110px] mx-auto flex justify-between">
				<Image
					src={Logo}
					alt={"logo"}
					className="object-contain -translate-x-16"
				/>
				<div className="pt-[76px] pb-[83.5px] flex justify-between gap-[100px]">
					{footercontent.map((el, i) => (
						<div key={i} className="flex flex-col gap-[25px]">
							<h4 className="font-bold text-[18px]">{el.head}</h4>
							<div className="flex flex-col items-start gap-[20px]">
								{el.links.map((link, i) => (
									<Link
										className={buttonVariants({
											variant: "link",
											className:
												"px-0 py-0 text-background-milk text-base font-medium h-fit gap-[15px]",
										})}
										key={i}
										href={link.link}
									>
										{link.icon ? (
											<Image src={link.icon} alt="" />
										) : null}
										{link.text}
									</Link>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="pt-[37.5px] pb-[26px] border-t border-background-milk/50">
				<p className="text-center">
					© 2023 Eclipse HR . All rights reserved.
				</p>
			</div>
		</div>
	);
};
