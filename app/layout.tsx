import type { Metadata } from "next";
import { Inter, Parisienne, Dancing_Script, Noto_Serif_Display, Quicksand } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400"], variable: '--font-Inter' });
const parisienne = Parisienne({ subsets: ["latin"], weight: ["400"], variable: '--font-Parisienne' });
const dancing_script = Dancing_Script({ subsets: ["latin"], weight: ["400"], variable: '--font-DancingScript' });
const noto_serif_display = Noto_Serif_Display({ subsets: ["latin"], weight: ["400"], variable: '--font-NotoSerifDisplay' });
const quicksand = Quicksand({ subsets: ["latin"], weight: ["400", "700"], variable: '--font-Quicksand' });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={[inter.variable, parisienne.variable, dancing_script.variable, noto_serif_display.variable, quicksand.variable].join(' ')}>{children}</body>
    </html>
  );
}