import { cn } from "@/lib/utils";

export const Hamburger = ({ open }: { open: boolean }) => {
	return (
		<div className="w-[21px] h-[21px] relative cursor-pointer rotate-0 transition-all ease-in-out duration-500 block overflow-hidden">
			<div
				className={cn(
					"h-[2.5px] w-full bg-foreground rounded absolute top-0 right-0 transition-all ease-in-out duration-500",
					{ "top-2 rotate-[135deg]": open }
				)}
			/>
			<div
				className={cn(
					"h-[2.5px] w-full bg-foreground rounded absolute top-2 right-0 transition-all ease-in-out duration-500",
					{ "opacity-0 left-14": open }
				)}
			/>
			<div
				className={cn(
					"h-[2.5px] w-full bg-foreground rounded absolute top-4 right-0 transition-all ease-in-out duration-500",
					{ "top-2 -rotate-[135deg]": open }
				)}
			/>
		</div>
	);
};
