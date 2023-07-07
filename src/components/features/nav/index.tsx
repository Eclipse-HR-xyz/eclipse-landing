"use client";

import Logo from "@/assets/Eclipse HR logo.png";
import MobileLogo from "@/assets/Eclipse HR logo mobile.png";
import Image from "next/image";
import { Menu } from "./menu";
import { MobileMenu } from "./menu/mobile";
import { Button } from "@/components/ui/button";
import { Play } from "@/assets/icons";
import { Hamburger } from "./hamburger";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { XCircle } from "lucide-react";

export const Nav = () => {
	const [open, setOpen] = useState(false);

	const toggleOpen = () => {
		setOpen((prev) => !prev);
	};

	return (
		<div className="w-full h-[60px] sm:h-[112px]">
			<div className="max-w-[1110px] px-4 lg:px-0 h-full mx-auto flex items-center justify-between">
				<div className="relative hidden w-20 mr-16 h-9 shrink-0 sm:block">
					<Image
						src={Logo}
						alt={"eclipse logo"}
						className="absolute -left-16 -top-10 max-w-none"
					/>
				</div>
				<Image
					src={MobileLogo}
					alt={"eclipse logo"}
					className="block sm:hidden"
				/>
				<div className="hidden mdm:block">
					<Menu />
				</div>
				<div className="gap-[10px] hidden mdm:flex">
					<Button variant={"outline"} size={"sm"}>
						Login
					</Button>
					<Button
						className="flex gap-[10px] w-max"
						size={"lg"}
						variant={"gradient"}
					>
						Watch demo <Image src={Play} alt={"play"} />
					</Button>
				</div>
				<Button
					variant={"ghost"}
					size={"icon"}
					className="block mdm:hidden"
					onClick={toggleOpen}
				>
					<Hamburger open={open} />
				</Button>
				<div
					className={cn(
						"fixed bg-white -left-full top-0 z-10 h-screen w-screen mdm:hidden transition-all ease-in-out duration-500 pb-5 flex flex-col divide-y-2",
						{
							"left-0": open,
						}
					)}
				>
					<Button
						variant={"outline"}
						size={"icon"}
						className="p-2 absolute top-[70px] right-[50px] border-black/20"
						onClick={toggleOpen}
					>
						<XCircle />
					</Button>
					<div
						className="grid grow place-items-center"
						onClick={toggleOpen}
					>
						<MobileMenu />
					</div>
					<div
						className="flex flex-col justify-center gap-2.5 grow px-9"
						onClick={toggleOpen}
					>
						<Button
							className="flex gap-[10px]"
							size={"lg"}
							variant={"gradient"}
						>
							Watch demo <Image src={Play} alt={"play"} />
						</Button>
						<Button variant={"outline"} size={"sm"}>
							Login
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

//-right-full top-full
