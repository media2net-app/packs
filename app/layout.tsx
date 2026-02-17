import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Log in op Packs",
  description: "Packs Holland Parts Distribution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
