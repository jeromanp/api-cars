import "./globals.css";
import type { Metadata } from "next";
import Head from "next/head";
import { Navbar, Footer } from "@/components";

export const metadata: Metadata = {
  title: "RoPi Cars",
  description:
    "Sitio para visualizar vehículos y clasificarlos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>       
        <link rel="icon" href="/RoPiCars.PNG" sizes="any" />
      </Head>
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
