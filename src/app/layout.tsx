import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./_navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Panitola HS School",
	description: "Panitola HS School for teachers and students.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
