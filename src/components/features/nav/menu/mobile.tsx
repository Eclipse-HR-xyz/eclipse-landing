"use client";

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navLinks } from "./constant";
import Image from "next/image";

export const MobileMenu = () => {
	return (
		<NavigationMenu>
			<NavigationMenuList className="flex flex-col gap-2.5">
				{navLinks.map((el, index) => (
					<NavigationMenuItem key={index} className="w-full">
						<Link href={el.href} legacyBehavior passHref>
							<NavigationMenuLink
								className={cn(
									navigationMenuTriggerStyle(),
									"py-3 flex gap-3"
								)}
							>
								<Image src={el.icon} alt="" /> {el.name}
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
};
