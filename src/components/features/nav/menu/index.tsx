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
import { usePathname } from "next/navigation";
import { navLinks } from "./constant";

export const Menu = () => {
	const pathname = usePathname();

	return (
		<NavigationMenu>
			<NavigationMenuList>
				{navLinks.map((el, index) => (
					<NavigationMenuItem key={index} className="relative">
						<Link href={el.href} legacyBehavior passHref>
							<NavigationMenuLink
								className={cn(
									navigationMenuTriggerStyle(),
									"py-2.5"
								)}
							>
								{el.name}
								{pathname === el.href ? (
									<div className="bg-primary" />
								) : null}
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
};
