import Header from "@/components/Header";
import MainProvider from "@/provider/MainProvider";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokemon",
  description: "Pokemon List",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <MainProvider>
          <Header />
          <div className="container mx-auto mt-12">{children}</div>
        </MainProvider>
      </body>
    </html>
  );
}
