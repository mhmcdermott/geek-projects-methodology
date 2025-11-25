import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Geek Projects - Professional Web Development",
  description: "Built with the Enhanced Geek Projects Methodology v4.1+",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}