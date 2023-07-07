import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Join = () => {
	return (
		<div className="flex flex-col items-center gap-[30px] mb-[112px] max-w-screen-lg mx-auto px-5 lg:px-0">
			<h4 className="text-[31px] sm:text-[39px] font-semibold text-transparent w-fit bg-clip-text bg-gradient-to-r from-primary to-green">
				Join waitlist
			</h4>
			<form className="flex flex-col gap-[50px] items-center w-full">
				<Input className="h-[100px] max-w-[960px] border-0 bg-background-milk/30 text-md px-[24px] md:px-[82px]" />
				<Button
					variant={"default"}
					size={"lg"}
					className="max-w-[376px] w-full py-[16px]"
				>
					Subscribe
				</Button>
			</form>
		</div>
	);
};
