import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

export const metadata = {
	title: "Eclipse HR",
	description: "Experience better human resource management",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={`${poppins.className}`}>{children}</body>
		</html>
	);
}
