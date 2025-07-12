import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist_Mono({
  weight: ["500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Md. Gilani - Full Stack Developer",
  description:
    "Explore the professional portfolio of Md. Gilani, a skilled Full Stack Developer. Discover projects showcasing expertise in modern web technologies, including front-end and back-end development, system architecture, and more. Learn about innovative solutions and contributions to the tech community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}>{children}</body>
    </html>
  );
}
