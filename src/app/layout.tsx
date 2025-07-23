import type { Metadata } from "next";
import "./globals.css";
import Fonts from "./fonts";

export const metadata: Metadata = {
  title: "Construction",
  description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${Fonts.urbanist.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
