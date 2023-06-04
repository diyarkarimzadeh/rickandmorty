import "./globals.css";
import { JetBrains_Mono as FontMono } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

const fontmono = FontMono({ subsets: ["latin"] });

export const metadata = {
  title: "Rick and Morty",
  description: "Created by Diyar Karimzadeh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full w-full" lang="en">
      <body className={fontmono.className}>
        <NextTopLoader />
        {children}
      </body>
    </html>
  );
}
