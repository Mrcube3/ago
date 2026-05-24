import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TraceMarket | AI Intelligence Marketplace",
  description: "Real-time AI reasoning trace marketplace on Arc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
