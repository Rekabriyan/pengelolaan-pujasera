import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pengelolaan Pujasera",
  description: "Dashboard for Food Court Management",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="root-layout">
      <body className="root-body">{children}</body>
    </html>
  );
}
