import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";

interface productCardProps {
	image: StaticImageData;
	title: string;
	subtitle: string;
}

export const ProductCard = ({ image, subtitle, title }: productCardProps) => {
	return (
		<Card className="flex flex-col items-center w-[330px]">
			<CardHeader className="flex items-center justify-center w-full mb-8">
				<Image src={image} alt={title} />
			</CardHeader>
			<CardContent>
				<CardTitle className="text-center">{title}</CardTitle>
				<CardDescription className="text-[14px]">
					{subtitle}
				</CardDescription>
			</CardContent>
		</Card>
	);
};
