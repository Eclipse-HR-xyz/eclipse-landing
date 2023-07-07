import { Button } from "@/components/ui/button";
import { Play } from "@/assets/icons";
import Image from "next/image";
import { HeroImage } from "@/assets/illustrations";

export const Hero = () => {
	return (
		<div className="overflow-hidden bg-background-milk">
			<div className="max-w-[1110px] mx-auto relative px-5 lg:px-0 flex items-start mdm:items-center flex-col mdm:flex-row">
				<div className="max-w-[480px] py-[18px] mdm:py-[160px] flex flex-col gap-[50px]">
					<div className="flex flex-col gap-[8px]">
						<h1 className="text-[43px] font-semibold leading-normal">
							Experience Better Human Resource <br />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-green-dark">
								Management with Web3
							</span>
						</h1>
						<p className="text-[18px] opacity-50">
							Discover and indulge our fully implemented A.I and
							Blockchain based HR software that delivers
							exceptional results.
						</p>
					</div>
					<div className="flex flex-col sm:flex-row gap-[10px]">
						<Button
							variant={"gradient"}
							size={"lg"}
							className="flex gap-[10px]"
						>
							Watch demo <Image src={Play} alt={"play"} />
						</Button>
						<Button
							variant={"outline"}
							size={"lg"}
							className="border-primary-dark"
						>
							Join waitlist
						</Button>
					</div>
				</div>
				<div className="self-center">
					<Image src={HeroImage} alt="you can do it" />
				</div>
			</div>
		</div>
	);
};
