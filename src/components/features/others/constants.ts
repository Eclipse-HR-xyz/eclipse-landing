import {
	ReadFace,
	TrackApplicants,
	Blockchain,
	AiBrain,
} from "@/assets/illustrations";
import { GreenAI, GreenCheck, GreenComputer } from "@/assets/icons";
import { StaticImageData } from "next/image";

export interface ISection {
	title: string;
	image: StaticImageData;
	mainfeature?: {
		icon: StaticImageData;
		text: string;
	};
	bullet: string[];
}

export const sections: ISection[] = [
	{
		title: "Blockchain Infrastructure",
		image: Blockchain,
		bullet: [
			"Transparent application interview session",
			"Verify employee/talent Identify (Future of Employment ™)",
			"Secured applicant data",
		],
	},
	{
		title: "AI infrastructure",
		image: AiBrain,
		mainfeature: {
			icon: GreenAI,
			text: "Latest AI/ML Emotion Recognition Technology",
		},
		bullet: [
			"Make data driven decisions and choose the right candidate",
			"Scan and score resumes with Eclipse CV scanner",
		],
	},
	{
		title: "Emotion Analysis",
		image: ReadFace,
		bullet: [
			"Latest AI/ML emotion recognition technology",
			"Know your applicant character",
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
			"Post & receive job applications from multiple platforms",
			"Schedule and monitor interview sessions and progress of Applicants",
		],
	},
];
