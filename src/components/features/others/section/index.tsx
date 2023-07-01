import { ISection } from "../constants";
import Image from "next/image";
import { BulletCheck } from "@/assets/icons";
import { cn } from "@/lib/utils";

interface sectionProps extends ISection {
	reverse: boolean;
}

export const Section = ({
	bullet,
	image,
	mainfeature,
	title,
	reverse,
}: sectionProps) => {
	return (
		<div className="pt-24 pb-[60px] border-b border-black/40">
			<div className="max-w-[1110px] mx-auto flex flex-col gap-[60px]">
				<h4 className="text-[39px] mx-auto font-semibold text-transparent w-fit bg-clip-text bg-gradient-to-r from-primary to-green">
					{title}
				</h4>
				<div
					className={cn("flex items-center justify-between", {
						"flex-row-reverse": reverse,
					})}
				>
					<div className="max-w-[484px] flex flex-col">
						<div className="flex gap-[30px] items-center p-[10px]">
							<Image src={mainfeature.icon} alt={""} />
							<h6 className="font-semibold text-[31px]">
								{mainfeature.text}
							</h6>
						</div>
						<div className="flex flex-col gap-[24px] mt-[30px] ml-auto">
							{bullet.map((el, i) => (
								<div
									key={i}
									className="p-[10px] flex gap-[10px] items-center"
								>
									<Image src={BulletCheck} alt="" />
									<p className="text-[20px] capitalize text-black">
										{el}
									</p>
								</div>
							))}
						</div>
					</div>
					<Image src={image} alt={`${title}-image`} />
				</div>
			</div>
		</div>
	);
};
