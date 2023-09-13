import "./globals.css";
import { Poppins } from "next/font/google";
import { Providers } from "./providers";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

const poppins = Poppins({ subsets: ["latin"], variable: "--font-poppins", weight: "500" });

export const metadata = {
	title: "Banco Hzhong",
	description:
    "O melhor banco",
};

export default function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="pt-br">
			<Head>
				<link rel="shortcut icon" href="/favicon.png"  type="image/png" sizes="32x32" />
			</Head>
			<body className={poppins.variable}>
				<Providers>
					{children}
				</Providers>
			</body>
		</html>
	);
}
