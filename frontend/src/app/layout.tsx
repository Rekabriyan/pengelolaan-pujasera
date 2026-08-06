import type { Metadata } from "next";
import { Roboto, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Pengelolaan Pujasera",
  description: "Dashboard for Food Court Management",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="root-layout">
      <body className={`${roboto.className} ${plusJakartaSans.className}`}>{children}</body>
    </html>
  );
}
