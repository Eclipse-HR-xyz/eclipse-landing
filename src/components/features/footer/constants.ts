import { Mail, MapPin } from "@/assets/icons";
import { StaticImageData } from "next/image";

type linkType = {
	text: string;
	link: string;
	icon?: StaticImageData;
};

type footerContentType = {
	head: string;
	links: linkType[];
};

export const footercontent: footerContentType[] = [
	{
		head: "Company",
		links: [
			{
				text: "Products",
				link: "#products",
			},
			{
				text: "About us",
				link: "#about",
			},
			{
				text: "Partners",
				link: "#partners",
			},
		],
	},
	{
		head: "Features",
		links: [
			{
				text: "Emotion analysis",
				link: "#feature1",
			},
			{
				text: "Applicant tracking",
				link: "#feature2",
			},
			{
				text: "Job schedule",
				link: "#feature3",
			},
		],
	},
	{
		head: "Contact Us",
		links: [
			{
				text: "hello@eclipsehr.io",
				link: "mailto:hello@eclipsehr.io",
				icon: Mail,
			},
			{
				text: "Ogbomosho, Oyo State, Nigeria.",
				link: "#",
				icon: MapPin,
			},
		],
	},
];
