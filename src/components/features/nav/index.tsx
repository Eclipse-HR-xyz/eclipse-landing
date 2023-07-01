import Logo from "@/assets/Eclipse HR logo.png";
import Image from "next/image";
import { Menu } from "./menu";
import { Button } from "@/components/ui/button";
import { Play } from "@/assets/icons";

export const Nav = () => {
	return (
		<div className="w-full h-[112px]">
			<div className="max-w-[1110px] h-full mx-auto flex items-center justify-between">
				<Image
					src={Logo}
					alt={"eclipse logo"}
					className="-translate-x-16"
				/>
				<div>
					<Menu />
				</div>
				<div className="flex gap-[10px]">
					<Button variant={"outline"} size={"sm"}>
						Login
					</Button>
					<Button
						className="flex gap-[10px]"
						size={"lg"}
						variant={"gradient"}
					>
						Watch demo <Image src={Play} alt={"play"} />
					</Button>
				</div>
			</div>
		</div>
	);
};
