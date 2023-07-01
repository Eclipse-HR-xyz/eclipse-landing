import { ReadFace, PressPhone, TrackApplicants } from "@/assets/illustrations";
import { GreenAI, GreenCheck, GreenComputer } from "@/assets/icons";
import { StaticImageData } from "next/image";

export interface ISection {
	title: string;
	image: StaticImageData;
	mainfeature: {
		icon: StaticImageData;
		text: string;
	};
	bullet: string[];
}

export const sections: ISection[] = [
	{
		title: "Emotion Analysis",
		image: ReadFace,
		mainfeature: {
			icon: GreenAI,
			text: "Latest AI/ML Emotion Recognition  Technology For Video",
		},
		bullet: [
			"Get more data from recorded interviews",
			"Get more data from recorded interviews",
			"Get more data from recorded interviews",
		],
	},
	{
		title: "Applicant Tracking",
		image: TrackApplicants,
		mainfeature: {
			icon: GreenCheck,
			text: "Make data-driven decions",
		},
		bullet: [
			"Get more data from recorded interviews",
			"Get more data from recorded interviews",
			"Get more data from recorded interviews",
		],
	},
	{
		title: "Job Schedule",
		image: PressPhone,
		mainfeature: {
			icon: GreenComputer,
			text: "Candidates can apply easily",
		},
		bullet: [
			"Get more data from recorded interviews",
			"Get more data from recorded interviews",
			"Get more data from recorded interviews",
		],
	},
	{
		title: "Job Schedule",
		image: PressPhone,
		mainfeature: {
			icon: GreenComputer,
			text: "Candidates can apply easily",
		},
		bullet: [
			"Get more data from recorded interviews",
			"Get more data from recorded interviews",
			"Get more data from recorded interviews",
		],
	},
];
